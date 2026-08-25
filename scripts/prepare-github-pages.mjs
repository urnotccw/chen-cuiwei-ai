import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const source = path.join(root, "dist", "client");
const prerendered = path.join(root, "dist", "server", "prerendered-routes");
const output = path.join(root, "pages");
const base = "/chen-cuiwei-ai/";

await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true, force: true });
await cp(path.join(prerendered, "index.html"), path.join(output, "index.html"));
await cp(path.join(prerendered, "404.html"), path.join(output, "404.html"));

async function rewrite(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewrite(file);
      continue;
    }
    if (!/\.(?:html|css|js|mjs)$/.test(entry.name)) continue;
    let text = await readFile(file, "utf8");
    // Vite/Vinext emits root-absolute asset URLs. GitHub project Pages is served
    // from /chen-cuiwei-ai/, so prefix those URLs in generated files.
    text = text.replace(/((?:href|src|poster|action)=["'])\/(?!\/)/g, `$1${base}`);
    text = text.replace(/url\(\/(?!\/)/g, `url(${base}`);
    await writeFile(file, text, "utf8");
  }
}

await rewrite(output);
