import { type MessageData, type Channel } from "@retconned/kick-js";
import fs from "fs";
import path from "path";

export const name = "reload";

export async function execute(client: any, message: MessageData, args: string[]) {
  if (message.sender.username !== "CosSinT") {
    await client.sendMessage("⛔ No tienes permiso para hacer esto.");
    return;
  }
  const comandos = (client as any).comandos as Map<string, any>;

  const comandoNombre = args[1];
  if (!comandoNombre) {
    await client.sendMessage("⚠️ Debes indicar el nombre del comando. Ej: &reload info");
    return;
  }

  const archivo = comandoNombre.endsWith(".ts") || comandoNombre.endsWith(".js")
    ? comandoNombre
    : `${comandoNombre}.ts`;

  const ruta = path.join(__dirname, archivo);

  if (!fs.existsSync(ruta)) {
    await client.sendMessage(`❌ El comando "${comandoNombre}" no existe.`);
    return;
  }

  try {
    // Limpiar el caché de los módulos importados
    delete require.cache[require.resolve(ruta)];
    
    // Importar el comando
    const comando = await import(ruta);
    await client.sendMessage(`♻️ Comando "${comando.name}" recargado, @${message.sender.username}`);

    if (comando.name && comando.execute) {
      comandos.set(comando.name, comando);
      console.log(`♻️ Comando recargado: ${comando.name}`);
      // Enviar el mensaje al chat
    }
  } catch (err) {
    console.error("❌ Error al recargar el comando:", err);
    await client.sendMessage("❌ Hubo un error al recargar el comando.");
  }
}
