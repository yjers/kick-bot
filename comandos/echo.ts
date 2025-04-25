import { MessageData } from "@retconned/kick-js";

export const name = "echo";

export async function execute(client: any, message: MessageData, args: string[]) {
  if (!args.length) {
    await client.sendMessage(`😅 Please specify a message`);
    return;
  }

  const response = args.slice(1).join(" ");
  await client.sendMessage(response);
}
