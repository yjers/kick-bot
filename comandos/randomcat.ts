import { Channel, MessageData } from "@retconned/kick-js";
import fetch from "node-fetch";

interface CatApiResponse {
  id: string;
  url: string;
  width: number;
  height: number;
}

export const name = "randomcat";

export async function execute(client: any, message: MessageData) {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = (await response.json()) as CatApiResponse[];

  if (data.length > 0) {
    await client.sendMessage(`cannySilly Mira este gatito, @${message.sender.username} ${data[0].url}`);
  } else {
    await client.sendMessage("No pude obtener un gatito en este momento.");
  }
}
