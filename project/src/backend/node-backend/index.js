const express = require("express");
const cors = require("cors");
const { Client } = require("minio");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Middleware CORS complet pour éviter les blocages navigateur
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// ✅ Connexion MinIO via ngrok
const minioClient = new Client({
  endPoint: "10a8-160-178-245-156.ngrok-free.app", // ✅ sans http:// ni /browser
  port: 443,
  useSSL: true,
  accessKey: "6u12GyovAeV4Vway3xFC",
  secretKey: "An483nI1ztqSCAgjZGtDg3P8NfzEJQwFFxKBFU9j"
});

// ✅ LLM Studio local (Meta LLM)
const LOCAL_LLM_ENDPOINT = "http://localhost:1234/v1/chat/completions";

// 🔍 Diagnostic basé sur nom patient dans message
app.post("/diagnostiquer-llm", async (req, res) => {
  const { message } = req.body;
  console.log("📩 Message reçu:", message);

  let matchedPatient = null;

  try {
    const filesStream = minioClient.listObjectsV2("health-data", "", true);

    for await (const file of filesStream) {
      if (!file.name.endsWith(".json")) continue;

      const stream = await minioClient.getObject("health-data", file.name);
      let jsonString = "";

      for await (const chunk of stream) {
        jsonString += chunk;
      }

      const data = JSON.parse(jsonString);

      if (message.toLowerCase().includes(data.name.toLowerCase())) {
        matchedPatient = data;
        console.log("✅ Patient trouvé :", matchedPatient.name);
        break;
      }
    }

    const prompt = matchedPatient
      ? `Voici les données du patient : ${JSON.stringify(matchedPatient)}\nSymptômes : ${message}\nQuel est le diagnostic ?`
      : `Symptômes du patient : ${message}. Quel est le diagnostic possible ?`;

    const fetch = (await import("node-fetch")).default;

    const response = await fetch(LOCAL_LLM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "local-model",
        messages: [
          {
            role: "system",
            content: "Tu es un assistant médical expert. Utilise les données patient si elles sont disponibles."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    const data = await response.json();
    const texte = data.choices?.[0]?.message?.content || "❌ Aucune réponse générée.";

    res.json({ reponse: texte });

  } catch (err) {
    console.error("❌ Erreur backend:", err.message);
    res.status(500).json({ reponse: "Erreur serveur ou patient introuvable." });
  }
});

// ✅ Lancer le serveur
app.listen(5000, () => {
  console.log("✅ Serveur Node.js en ligne sur http://localhost:5000");
});
