import { Channel, MessageData } from "@retconned/kick-js";

export const name = "cuenta";

export async function execute(client: any, message: MessageData, args: string[]) {
  const numero = parseInt(args[1]);
  if (!isNaN(numero) && numero > 0 && numero <= 1000) {
    for (let i = numero; i > 0; i--) {
      await client.sendMessage(`⏳ ${i}`);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    await client.sendMessage("🎉 ¡Tiempo terminado!");
  } else {
    await client.sendMessage("Por favor usa: &cuenta [número del 1 al 1000]");
  }
}
