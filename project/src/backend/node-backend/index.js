const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

// ✅ Autoriser toutes les origines
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

const LOCAL_LLM_ENDPOINT = "http://localhost:1234/v1/chat/completions"; // RESTE EN LOCAL ici

app.post("/diagnostiquer-llm", async (req, res) => {
  const userText = req.body.message;

  try {
    const response = await fetch(LOCAL_LLM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "local-model",
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

app.listen(5000, () => {
  console.log("✅ Serveur Node.js en ligne sur http://localhost:5000");
});
