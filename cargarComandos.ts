// cargarComandos.ts
import fs from 'fs';
import path from 'path';

interface Comando {
  name: string;
  execute: Function;
}

const comandos = new Map<string, Comando>();

export async function cargarComandos() {
  comandos.clear();
  const rutaComandos = path.join(__dirname, 'comandos');
  const archivos = fs.readdirSync(rutaComandos).filter(f => f.endsWith('.ts') || f.endsWith('.js'));

  for (const archivo of archivos) {
    const ruta = path.join(rutaComandos, archivo);
    delete require.cache[require.resolve(ruta)];
    const modulo = await import(ruta);
    if (modulo.name && modulo.execute) {
      comandos.set(modulo.name, modulo);
      console.log(`✅ Comando cargado: ${modulo.name}`);
    }
  }
}

export { comandos };
