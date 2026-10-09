import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("dist/github-pages");
const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".mp4": "video/mp4", ".json": "application/json" };
http.createServer(async (req, res) => {
  try {
    const requestedPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    if (!requestedPath.startsWith("/chen-cuiwei-ai/")) throw new Error("Outside GitHub project base");
    const pathname = requestedPath.replace(/^\/chen-cuiwei-ai\//, "/");
    let file = path.resolve(root, `.${pathname}`);
    if (!file.startsWith(`${root}${path.sep}`) && file !== root) throw new Error("Invalid path");
    if ((await stat(file)).isDirectory()) file = path.join(file, "index.html");
    res.writeHead(200, { "content-type": mime[path.extname(file)] ?? "application/octet-stream" });
    res.end(await readFile(file));
  } catch { res.writeHead(404); res.end("Not found"); }
}).listen(4173, "127.0.0.1", () => console.log("Local: http://127.0.0.1:4173/chen-cuiwei-ai/"));
