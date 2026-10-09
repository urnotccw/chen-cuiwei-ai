// Generate web-sized derivatives; original artwork is never overwritten.
import { readdir, mkdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const packages = await readdir(path.join(root, "node_modules/.pnpm"));
const sharpPackage = packages.find((name) => name.startsWith("sharp@"));
if (!sharpPackage) throw new Error("Install the project dependencies before generating images.");
const { default: sharp } = await import(pathToFileURL(path.join(root, "node_modules/.pnpm", sharpPackage, "node_modules/sharp/lib/index.js")));
const output = path.join(root, "public/optimized");
await mkdir(output, { recursive: true });
await mkdir(path.join(root, "app/data"), { recursive: true });
const manifest = {};
let originalBytes = 0;
let webBytes = 0;
for (const name of (await readdir(path.join(root, "public"))).sort()) {
  if (!/\.(png|jpe?g)$/i.test(name)) continue;
  const source = path.join(root, "public", name);
  const metadata = await sharp(source).metadata();
  const smallArtwork = /^wuxing-(card|enemy)-/.test(name);
  const maxWidth = smallArtwork ? 800 : 2400;
  const widths = [...new Set([Math.min(720, metadata.width), Math.min(maxWidth, metadata.width)])];
  const variants = [];
  for (const width of widths) {
    const file = `${path.parse(name).name}-${width}.webp`;
    const info = await sharp(source).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 88, effort: 4 }).toFile(path.join(output, file));
    variants.push({ src: `./optimized/${file}`, width: info.width, height: info.height, bytes: info.size });
  }
  const largest = variants.at(-1);
  manifest[`/${name}`] = { ...largest, srcSet: variants.map((v) => `${v.src} ${v.width}w`).join(", "), small: variants[0].src };
  originalBytes += (await stat(source)).size;
  webBytes += largest.bytes;
}
await writeFile(path.join(root, "app/data/portfolio-images.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(JSON.stringify({ images: Object.keys(manifest).length, originalBytes, webBytes, reductionPercent: Math.round((1 - webBytes / originalBytes) * 100) }));
