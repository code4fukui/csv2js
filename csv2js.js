import { CSV } from "https://code4fukui.github.io/CSV/CSV.js";
import { EXT } from "https://code4fukui.github.io/EXT/EXT.js";

const fn = Deno.args[0];
if (!fn) {
  console.log("csv2js [csv fn]");
  Deno.exit(1);
}

const data = await CSV.fetchJSON(fn);
const name = EXT.remove(fn);
const fn2 = fn + ".js";
const js = `export default ${JSON.stringify(data, null, 2)};\n`;
await Deno.writeTextFile(fn2, js);
