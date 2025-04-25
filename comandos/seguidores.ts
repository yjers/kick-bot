import { Channel, MessageData } from "@retconned/kick-js";
import fetch from "node-fetch";  // npm install node-fetch@2

// Modelamos la respuesta exacta que viste en consola
interface KickApiResponse {
  status: {
    error: boolean;
    code: number;
    message: string;
  };
  data: {
    account: {
      user: {
        id: string;
        username: string;
        is_verified: boolean;
        profile_picture: string;
      };
      channel: {
        id: string;
        slug: string;
        banner_picture: string;
        description: string;
        followers_count: number;
      };
    };
  };
}

export const name = "seguidores";

export async function execute(client: any, message: MessageData) {
  try {
    const args = message.content.trim().split(/\s+/).slice(1);
    const targetUsername = args[0] || message.sender.username;

    // Tu token de Kick (mejor usar env var en prod)
    const token = "206999977|VbXgqWBrat2I4UlDzNBnsPrzpio4GVbCpCfY0HGg";
    if (!token) {
      await client.sendMessage("❌ No configuraste `KICK_API_TOKEN`.");
      return;
    }

    // Llamada al endpoint que tú mostraste
    const res = await fetch(
      `https://api.kick.com/private/v1/channels/${encodeURIComponent(targetUsername)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      await client.sendMessage(`❌ Canal **${targetUsername}** no encontrado. (status ${res.status})`);
      return;
    }

    // Parseamos con la interfaz correcta
    
    const json = (await res.json()) as KickApiResponse;
    const user = json.data.account.user;
    const chan = json.data.account.channel;
    // tras el fetch y el parseo…


// ESTE es el URL “desescapado” en runtime:
const avatarUrl = user.profile_picture;
const cleanAvatar = avatarUrl.replace(/\\\//g, '/');




    


    // Construimos el mensaje con el username
    const userInfo = [
      `👤 Usuario: ${user.username}`,
      `👥 Seguidores: ${chan.followers_count}`,
    ].join(" | ");

    await client.sendMessage(userInfo);
  } catch (error) {
    console.error(error);
    await client.sendMessage("❌ Ocurrió un error al consultar la API de Kick.");
  }
}
