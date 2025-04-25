import { Channel, MessageData } from "@retconned/kick-js";

export const name = "comando";

export async function execute(client: any, message: MessageData) {
  await client.sendMessage(`happi  Puedes encontrar los comandos en el siguiente enlace: https://paste.ivr.fi/ymipiqazyn`);
}
