import { createClient, type MessageData, type Channel, type Livestream} from "@retconned/kick-js";
import fetch from "node-fetch";
import * as fs from "fs";
import * as path from "path";
import { getVideoID } from "ytdl-core";
import dotenv from 'dotenv';
dotenv.config();
console.log("TOKEN:", process.env.BEARER_TOKEN);
console.log("Iniciando cliente...");

const username = "cossint"
const client = createClient(username, { logger: true, readOnly: false });

const bearerToken = process.env.BEARER_TOKEN || "";
const xsrfToken = process.env.XSRF_TOKEN || "";
const cookies = process.env.COOKIES || "";


const PREFIX = "&";
const comandos: Map<string, any> = new Map();
(client as any).comandos = comandos; // Para que los comandos puedan acceder al mapa si lo necesitan

// Función para cargar comandos dinámicamente
async function cargarComandos() {
  comandos.clear();
  const comandosPath = path.join(__dirname, "comandos");
  const archivos = fs.readdirSync(comandosPath).filter(file => file.endsWith(".ts") || file.endsWith(".js"));

  for (const archivo of archivos) {
    const ruta = path.join(comandosPath, archivo);
    delete require.cache[require.resolve(ruta)];
    const comando = await import(ruta);
    if (comando.name && comando.execute) {
      comandos.set(comando.name, comando);
      console.log(`✅ Comando cargado: ${comando.name}`);
    }
  }
}

client.login({
  type: "tokens",
  credentials: {
    bearerToken,
    cookies,
    xsrfToken,
  },
}).then(() => {
  console.log("✅ Login exitoso.");
}).catch((err) => {
  console.error("❌ Error en login:", err);
});

client.on("ready", async () => {
  await cargarComandos();
  console.log(client.user?.username);
  console.log(`✅ Bot listo y conectado como ${client.user?.tag}`);
  try {
    await client.sendMessage("¡Bot conectado y listo!");
  } catch (err) {
    console.error("❌ Error enviando mensaje de inicio:", err);
  }
});

client.on("ChatMessage", async (message) => {
  if (message.sender.id == "60036324") return;

  console.log(`Mensaje recibido en el canal: ${message.sender.id} ${message.sender.username}: ${message.content}`);
  const COHERE_API_KEY = process.env.COHERE_API_KEY || ""; // Asegúrate de tener tu API Key de Cohere en el archivo .env

interface CohereResponse {
  generations: {
    text: string;
  }[];
  message?: string;
}

async function getAIResponse(userMessage: string): Promise<string> {
  const prompt = `Responde brevemente (maximo 5 palabras) y en español: ${userMessage}`;

  const response = await fetch("https://api.cohere.ai/v1/generate", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${COHERE_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "command-light", // Compatible con el plan gratuito
      prompt: prompt,
      max_tokens: 100,         // 🔹 Mensaje corto
      temperature: 0.7         // 🔹 Un poco creativo, pero controlado
    })
  });

  const data = await response.json() as CohereResponse;

  if (!response.ok) {
    console.error("❌ Error de Cohere:", data);
    return "❌ La IA (Cohere) no pudo generar respuesta.";
  }

  return data.generations?.[0]?.text.trim() || "⚠️ Cohere no devolvió una respuesta válida.";
}

  
  // Escuchar mensajes
  const rawMessage = message.content.trim();

  if (rawMessage.toLowerCase().startsWith("@cosbot")) {
    console.log("🔍 Mención detectada");
    const userPrompt = rawMessage.replace(/^@cosbot\s*/i, "").trim();
    console.log("📨 Prompt del usuario:", userPrompt);
  
    // 👉 Comando para apagar el bot
    if (userPrompt.toLowerCase() === "apágate") {
      await client.sendMessage("👋 Apagando el bot. ¡Hasta luego!");
      console.log("🛑 Comando de apagado recibido. Cerrando el bot...");
      process.exit(0); // ⬅️ Cierra el proceso de Node.js
    }
  
    try {
      const aiReply = await getAIResponse(userPrompt);
      console.log("🤖 Respuesta de la IA:", aiReply);
      await client.sendMessage(aiReply);
    } catch (err) {
      console.error("❌ Error al obtener respuesta de la IA:", err);
      await client.sendMessage("❌ Ocurrió un error al obtener respuesta.");
    }
  
    return;
  }
  

  
  if (!rawMessage.startsWith(PREFIX)) return;



  const args = rawMessage.slice(PREFIX.length).trim().split(/\s+/);
  const command = args[0].toLowerCase();

  if (comandos.has(command)) {
    try {
      await comandos.get(command).execute(client, message, args);
    } catch (err) {
      console.error(`❌ Error ejecutando comando ${command}:`, err);
      await client.sendMessage(`❌ Ocurrió un error con el comando "${command}"`);
    }
  }
});