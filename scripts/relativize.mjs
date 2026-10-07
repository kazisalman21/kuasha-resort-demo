// Build a portable copy of dist/ (dist-artifact/) that works from any sub-path or from file://:
// - root-absolute URLs (/img/..., /stay/) become relative, with explicit index.html
// - image set trimmed to 480/800/1600 widths (srcset rewritten) to keep the upload small
import fs from 'node:fs';
import path from 'node:path';

// TARGET=pages builds a GitHub Pages copy (dist-pages/): full documents, absolute URLs pointed at PAGES_URL.
const PAGES = process.env.TARGET === 'pages';
const PAGES_URL = process.env.PAGES_URL || 'https://kazisalman21.github.io/kuasha-resort-demo/';
const SRC = 'dist', OUT = PAGES ? 'dist-pages' : 'dist-artifact', KEEP = new Set([480, 800, 1600]);
fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync(SRC, OUT, { recursive: true });

// trim images
for (const f of fs.readdirSync(path.join(OUT, 'img'))) {
  const m = f.match(/-(\d+)\.webp$/);
  if (m && !KEEP.has(+m[1])) fs.rmSync(path.join(OUT, 'img', f));
}
const exists = (p) => fs.existsSync(path.join(OUT, p));

function walk(dir) { return fs.readdirSync(dir, { withFileTypes: true }).flatMap(d => d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]); }

function rel(url, depth) {
  const up = depth ? '../'.repeat(depth) : './';
  let [p, rest = ''] = url.split(/(?=[?#])/);
  p = p.replace(/^\//, '');
  if (p === '' || p.endsWith('/')) p += 'index.html';
  return up + p + rest;
}

for (const file of walk(OUT).filter(f => f.endsWith('.html'))) {
  const depth = path.relative(OUT, path.dirname(file)).split(path.sep).filter(Boolean).length;
  let h = fs.readFileSync(file, 'utf8');
  // srcset / imagesrcset: drop missing widths, relativize
  h = h.replace(/(\s(?:srcset|imagesrcset))="([^"]+)"/g, (_, a, v) => {
    const parts = v.split(',').map(s => s.trim()).filter(s => exists(s.split(' ')[0]));
    return `${a}="${parts.map(s => { const [u, w] = s.split(' '); return rel(u, depth) + ' ' + w; }).join(', ')}"`;
  });
  // src of trimmed widths (-1200/-2200) -> 1600
  h = h.replace(/(\/img\/[a-z0-9-]+)-(1200|2200)\.webp/g, '$1-1600.webp');
  h = h.replace(/(\s(?:href|src|action))="(\/(?!\/)[^"]*)"/g, (_, a, u) => `${a}="${rel(u, depth)}"`);
  h = h.replace('data-root="/" data-index=""', `data-root="${depth ? '../'.repeat(depth) : './'}" data-index="index.html"`);
  if (PAGES) h = h.replaceAll('https://kuasha.example/', PAGES_URL).replaceAll('https:\\/\\/kuasha.example\\/', PAGES_URL.replaceAll('/', '\\/'));
  fs.writeFileSync(file, h);
}
// JS bundles may contain literal "/img/" or "/book/" strings built at runtime via ROOT; nothing else to rewrite.
const files = walk(OUT);
const bytes = files.reduce((s, f) => s + fs.statSync(f).size, 0);
console.log(`${OUT}: ${files.length} files, ${(bytes / 1048576).toFixed(1)} MB`);

// The artifact host wraps the entry page in its own <!doctype><html><head><body> skeleton,
// so the entry page ships as body content: strip the outer tags, keep head elements, and set
// the root/index data attributes from script instead of on <html>.
if (PAGES) {
  fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
  for (const f of ['robots.txt', 'sitemap.xml']) { const p = path.join(OUT, f); fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replaceAll('https://kuasha.example/', PAGES_URL)); }
} else {
  const f = path.join(OUT, 'index.html');
  let h = fs.readFileSync(f, 'utf8');
  const head = h.match(/<head>([\s\S]*?)<\/head>/)[1].replace(/<title>[^<]*<\/title>/, '<title>Kuasha Sreemangal</title>')
    .replace(/<meta charset="utf-8"\s*\/?>/, '').replace(/<meta name="viewport"[^>]*>/, '');
  const body = h.match(/<body([^>]*)>([\s\S]*)<\/body>/);
  const attrs = body[1];
  const out = `${head.replace(/^\s*/, '')}\n<script>document.documentElement.dataset.root='./';document.documentElement.dataset.index='index.html';document.documentElement.lang='en';</script>\n<div${attrs.replace(/class="/, 'class="body-proxy ')} data-body-proxy>${body[2]}</div>\n<script>(function(){var p=document.querySelector('[data-body-proxy]');document.body.dataset.demo=p.dataset.demo;})();</script>`;
  fs.writeFileSync(f, out.replace(/<title>Kuasha Sreemangal<\/title>/, '').replace(/^/, '<title>Kuasha Sreemangal</title>\n'));
}
