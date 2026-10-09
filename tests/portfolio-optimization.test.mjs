import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const html = await readFile("dist/server/prerendered-routes/index.html", "utf8");
const manifest = JSON.parse(await readFile("app/data/portfolio-images.json", "utf8"));

test("resume and seven projects remain, with one introduction per new case", () => {
  assert.ok(html.includes("2026.06 - 2026.9"));
  assert.equal((html.match(/id="project-0[1-7]"/g) ?? []).length, 7);
  assert.equal((html.match(/class="project-overview /g) ?? []).length, 2);
  assert.ok(html.includes("需求假设，待用户验证"));
  assert.ok(!html.includes("AI 缩短验证想法的路径"));
});
test("external apps don't load before intent, and the video doesn't preload", () => {
  assert.equal((html.match(/<iframe\b/g) ?? []).length, 0);
  assert.equal((html.match(/class="live-demo-ready"/g) ?? []).length, 3);
  assert.match(html, /<video[^>]+preload="none"/);
  assert.ok(html.includes("https://dart-trip-weekend-27113.urnotccw1.chatgpt.site/"));
});
test("portfolio raster images use responsive, lazy, dimensioned derivatives", async () => {
  const imgs = [...html.matchAll(/<img\b[^>]+>/g)].map((m) => m[0]).filter((tag) => tag.includes("./optimized/"));
  assert.ok(imgs.length > 50);
  for (const tag of imgs) {
    assert.match(tag, /loading="lazy"/);
    assert.match(tag, /srcSet=/i);
    assert.match(tag, /width="\d+"/);
    assert.match(tag, /height="\d+"/);
  }
  let before = 0, after = 0;
  for (const [original, asset] of Object.entries(manifest)) {
    before += (await stat(`public${original}`)).size;
    after += (await stat(`public/${asset.src}`)).size;
  }
  assert.ok(after < before * 0.2, `Expected 80%+ reduction, got ${after}/${before}`);
});
test("GitHub Pages output contains usable optimized paths", async () => {
  const github = await readFile("dist/github-pages/index.html", "utf8");
  assert.ok(github.includes('src="./optimized/'));
  assert.ok(github.includes('/chen-cuiwei-ai/_next/static/'));
  assert.ok(!github.includes('src="/optimized/'));
});
