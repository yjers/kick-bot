import { Channel, MessageData } from "@retconned/kick-js";

export const name = "ping";

const startTime = Date.now();
const version = "1.0.0";

export async function execute(client: any, message: MessageData) {
  const pingStart = Date.now();
  const now = Date.now();
  const uptime = now - startTime;

  const seconds = Math.floor((uptime / 1000) % 60);
  const minutes = Math.floor((uptime / (1000 * 60)) % 60);
  const hours = Math.floor((uptime / (1000 * 60 * 60)) % 24);
  const days = Math.floor(uptime / (1000 * 60 * 60 * 24));
  const uptimeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  const latency = Date.now() - pingStart;
  const currentDate = new Date().toLocaleString("es-ES", { timeZone: "UTC" });

  await client.sendMessage(
    `👋 Hola ${message.sender.username} | ⏱️ Uptime: ${uptimeString} | 📅 Fecha (UTC): ${currentDate} |  🤖 Versión: ${version}`
  );
}
