import { Channel, MessageData } from "@retconned/kick-js";

export const name = "info";

export async function execute(client: any, message: MessageData) {
  await client.sendMessage(`happi @${message.sender.username} soy un bot elaborado por @cossint, si quieres saber más sobre mí, puedes preguntar a mi creador.`);
}
