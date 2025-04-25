import { Channel, MessageData } from "@retconned/kick-js";

export const name = "spam";

export async function execute(client: any, message: MessageData, args: string[]) {
  const cantidad = parseInt(args[1]);
  const texto = args.slice(2).join(" ");

  if (!isNaN(cantidad) && cantidad > 0 && cantidad <= 100 && texto) {
    for (let i = 0; i < cantidad; i++) {
      await client.sendMessage(texto);
      await new Promise(resolve => setTimeout(resolve, 0));
    }
  } else {
    await client.sendMessage("Uso correcto: &spam [cantidad del 1 al 100] [mensaje]");
  }
}
