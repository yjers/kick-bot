import { exec } from "child_process";
import { MessageData } from "@retconned/kick-js";

export const name = "push";

export async function execute(client: any, message: MessageData, args: string[]) {
  if (message.sender.username !== "CosSinT") {
    await client.sendMessage("⛔ No tienes permiso para hacer esto.");
    return;
  }

  exec('git add . && git commit -m "Cambios Realizado en el bot" && git push -f origin main', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar git: ${error.message}`);
      client.sendMessage("❌ Error al subir los cambios a GitHub.");
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
    client.sendMessage("✅ Cambios subidos a GitHub correctamente.");
  });
}
