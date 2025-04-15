const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 👉 Endpoint local de LM Studio
const LOCAL_LLM_ENDPOINT = "http://localhost:1234/v1/chat/completions";

app.post("/diagnostiquer-llm", async (req, res) => {
  const userText = req.body.message;

  try {
    const response = await fetch(LOCAL_LLM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "local-model", // Laisse ce nom, LM Studio s'en fiche ici
        messages: [
          {
            role: "system",
            content: "Tu es un assistant médical expert. Réponds de manière précise et fiable aux symptômes décrits."
          },
          {
            role: "user",
            content: `Voici les symptômes du patient : ${userText}. Quel est le diagnostic possible ?`
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    const data = await response.json();
    const texte = data.choices?.[0]?.message?.content || "❌ Aucune réponse générée.";

    res.json({ reponse: texte });

  } catch (error) {
    console.error("❌ Erreur LM Studio :", error);
    res.status(500).json({ reponse: "Erreur lors de la génération du diagnostic avec LM local." });
  }
});

// ✅ Lancer serveur Node.js
app.listen(5000, () => {
  console.log("✅ Serveur Node.js en ligne sur http://localhost:5000");
});