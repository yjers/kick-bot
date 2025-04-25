import { MessageData } from "@retconned/kick-js";

export const name = "piramide";

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function execute(client: any, message: MessageData, args: string[]) {
  const usage = `Uso: !piramide 5 test`;

  const size = parseInt(args[1]);
  const emote = args.slice(2).join(" ") + " ";

  if (args.length < 3) {
    await client.sendMessage(usage);
    return;
  }

  if (isNaN(size)) {
    await client.sendMessage(`El tamaño debe ser un número. ${usage}`);
    return;
  }

  if (size > 40) {
    await client.sendMessage(`El tamaño máximo es 40.`);
    return;
  }

  if (size < 2) {
    await client.sendMessage(`El tamaño mínimo es 2.`);
    return;
  }

  const maxSizeAllowed = Math.floor(498 / emote.length);
  if (size > maxSizeAllowed) {
    await client.sendMessage(`El tamaño máximo para este emote es ${maxSizeAllowed}.`);
    return;
  }

  // Subir
  for (let i = 1; i <= size; i++) {
    await client.sendMessage(emote.repeat(i));
    await delay(100); // velocidad ajustada
  }

  // Bajar
  for (let i = size - 1; i > 0; i--) {
    await client.sendMessage(emote.repeat(i));
    await delay(100); // velocidad ajustada
  }

  // Mensaje final
  await client.sendMessage(`Piramide completada con tamaño ${size}.`);
}

