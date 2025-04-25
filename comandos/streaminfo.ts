import { Channel, MessageData } from "@retconned/kick-js";
import fetch from "node-fetch";  // npm install node-fetch@2

// Interfaz para la respuesta de livestreams
interface Livestream {
  id: string;
  slug: string;
  channel_id: string;
  broadcaster_slug: string;
  is_live: boolean;
  viewer_count: number;
  started_at: string;
  ended_at?: string | null;
}

interface LivestreamsResponse {
  data: {
    livestreams: Livestream[];
  };
  pagination: {
    cursor?: string;
    total: number;
  };
}

export const name = "streaminfo";

export async function execute(client: any, message: MessageData) {
  try {
    const args = message.content.trim().split(/\s+/).slice(1);
    const targetSlug = args[0] || message.sender.username;

    const token = "206999977|VbXgqWBrat2I4UlDzNBnsPrzpio4GVbCpCfY0HGg"
    if (!token) {
      await client.sendMessage("❌ No configuraste `KICK_API_TOKEN`.");
      return;
    }

    // 1) Petición al endpoint de livestreams
    const params = new URLSearchParams({
      broadcaster_slug: targetSlug,
      limit: "1"
    });
    const res = await fetch(
      `https://api.kick.com/private/v1/livestreams?${params.toString()}`,
      {
        headers: {
          "Authorization": `Bearer ${token}`,   // App Access Token :contentReference[oaicite:10]{index=10}
          "Accept": "application/json"
        }
      }
    );
    if (!res.ok) {
      await client.sendMessage(`❌ Error al consultar streaminfo (status ${res.status}).`);
      return;
    }

    // 2) Parseo de la respuesta
    const json = (await res.json()) as LivestreamsResponse;
    const streams = json.data.livestreams;

    // 3) Si no hay vivo
    if (streams.length === 0 || !streams[0].is_live) {
      await client.sendMessage(`🔴 El canal ${targetSlug} no está transmitiendo en este momento.`);
      return;
    }

    const live = streams[0];
    const started = new Date(live.started_at).toLocaleString("es-EC", {
      timeZone: "America/Guayaquil"
    });

    // 4) Construcción del mensaje
    const infoMsg = [
      `🔴${targetSlug} está EN VIVO`,
      `🎮 Stream: ${live.slug}`,
      `👀 Espectadores: ${live.viewer_count}`,
      `🕒 Inició: ${started}`
    ].join("");

    await client.sendMessage(infoMsg);
  } catch (error) {
    console.error("Error en !streaminfo:", error);
    await client.sendMessage("❌ Ocurrió un error al obtener la información del stream.");
  }
}
