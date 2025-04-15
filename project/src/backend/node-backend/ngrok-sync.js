const fs = require('fs');
const path = require('path');

async function updateFrontendURL() {
  try {
    // 👇 Importer node-fetch dynamiquement car c'est un module ESM
    const fetch = (await import('node-fetch')).default;

    const response = await fetch("http://127.0.0.1:4040/api/tunnels");
    const data = await response.json();

    const publicUrl = data.tunnels[0].public_url;
    const frontendPath = path.join(__dirname, '../../pages/dashboard/doctor/Chatbot.tsx');



    let code = fs.readFileSync(frontendPath, 'utf8');
    code = code.replace(
      /https:\/\/[a-zA-Z0-9\-]+\.ngrok-free\.app\/diagnostiquer-llm/g,
      `${publicUrl}/diagnostiquer-llm`
    );

    fs.writeFileSync(frontendPath, code, 'utf8');
    console.log("✅ URL mise à jour :", publicUrl);
  } catch (err) {
    console.error("❌ Erreur de mise à jour du lien ngrok :", err.message);
  }
}

updateFrontendURL();
