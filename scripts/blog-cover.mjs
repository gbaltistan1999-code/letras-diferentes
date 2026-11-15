/**
 * Generates a 1200×630 blog cover image in the site's brand style.
 *
 * Usage:
 *   node scripts/blog-cover.mjs <slug> "<title line 1|title line 2|...>" "<decorative text>"
 *
 * Example:
 *   node scripts/blog-cover.mjs nomes-para-free-fire "Nomes para Free Fire|40 ideias de nick" "꧁ Lobo ꧂"
 *
 * Writes public/blog/<slug>.png. Then set `cover` in the post's data file.
 * Uses sharp (already installed with Next.js); no network access needed.
 */
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const [slug, titleArg, deco = ""] = process.argv.slice(2);
if (!slug || !titleArg) {
  console.error('Usage: node scripts/blog-cover.mjs <slug> "<line 1|line 2>" "<decorative text>"');
  process.exit(1);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const W = 1200;
const H = 630;
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const lines = titleArg.split("|");
const fontSize = lines.some((l) => l.length > 22) ? 60 : 68;
const lineHeight = Math.round(fontSize * 1.18);
const titleTop = 300 - ((lines.length - 1) * lineHeight) / 2;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fbf8fc"/>
      <stop offset="1" stop-color="#f3e9f8"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <circle cx="1080" cy="90" r="210" fill="#ead7f5"/>
  <circle cx="1150" cy="560" r="150" fill="#fbdbe6"/>
  <rect x="70" y="80" rx="22" width="230" height="44" fill="#7a2e9e"/>
  <text x="185" y="110" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="600" fill="#ffffff">Blog · Dicas</text>
  ${lines
    .map(
      (l, i) =>
        `<text x="70" y="${titleTop + i * lineHeight}" font-family="Segoe UI, Arial, sans-serif" font-size="${fontSize}" font-weight="700" fill="#1f1d1c">${esc(l)}</text>`,
    )
    .join("\n  ")}
  <text x="1110" y="${H / 2 + 20}" text-anchor="end" font-family="Segoe UI Symbol, Cambria Math, Segoe UI, sans-serif" font-size="56" fill="#7a2e9e" opacity="0.9">${esc(deco)}</text>
  <rect x="0" y="${H - 10}" width="${W}" height="10" fill="#7a2e9e"/>
</svg>`;

const logo = await sharp(join(root, "public/logo.png")).resize({ height: 64 }).toBuffer();
const out = join(root, "public/blog", `${slug}.png`);
mkdirSync(dirname(out), { recursive: true });
await sharp(Buffer.from(svg))
  .composite([{ input: logo, left: 70, top: H - 64 - 52 }])
  .png({ compressionLevel: 9 })
  .toFile(out);
console.log("wrote", out);
