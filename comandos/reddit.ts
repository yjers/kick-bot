import { Channel, MessageData } from "@retconned/kick-js";
import fetch from "node-fetch";

interface RedditPost {
  data: {
    post_hint?: string;
    url: string;
    title: string;
  };
}

interface RedditResponse {
  data: {
    children: RedditPost[];
  };
}

interface AboutData {
  data: {
    over18: boolean;
  };
}

export const name = "reddit";

export async function execute(client: any, message: MessageData, args: string[]) {
  const subreddit = args[1];
  const cantidadSolicitada = parseInt(args[2]) || 1;

  if (!subreddit) {
    await client.sendMessage("⚠️ Por favor, proporciona el nombre del subreddit. Ejemplo: &reddit gatos");
    return;
  }

  try {
    // Verificamos si el subreddit es NSFW
    const aboutUrl = `https://www.reddit.com/r/${subreddit}/about.json`;
    const aboutResponse = await fetch(aboutUrl);
    const aboutData = (await aboutResponse.json()) as AboutData;

    if (aboutData?.data?.over18) {
      await client.sendMessage(`⚠️ El subreddit r/${subreddit} es NSFW. No puedo mostrar contenido de este tipo.`);
      return;
    }

    // Obtener imágenes del subreddit
    const url = `https://www.reddit.com/r/${subreddit}/hot.json?limit=50`;
    const response = await fetch(url);
    const jsonData = (await response.json()) as RedditResponse;

    const posts = jsonData.data.children.filter(post => post.data.post_hint === "image");

    if (posts.length === 0) {
      await client.sendMessage(`No encontré imágenes en r/${subreddit}`);
      return;
    }

    const cantidad = Math.min(cantidadSolicitada, posts.length);
    const shuffledPosts = posts.sort(() => Math.random() - 0.5);

    for (let i = 0; i < cantidad; i++) {
      const post = shuffledPosts[i];
      await client.sendMessage(`${post.data.title} | r/${subreddit}: ${post.data.url}`);
    }

  } catch (err) {
    console.error("❌ Error al buscar subreddit:", err);
    await client.sendMessage("❌ Ocurrió un error al buscar el subreddit.");
  }
}
