// Shared behaviour. Everything degrades gracefully: content is visible and links work without JS.
const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));
export const ROOT = document.documentElement.dataset.root || '/';
export const IDX = document.documentElement.dataset.index || '';
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Header: solid after the hero ---------- */
const header = $('[data-header]');
const hero = $('[data-hero]');
function onScroll() {
  const y = scrollY;
  if (header?.classList.contains('hdr--over')) header.classList.toggle('is-solid', y > 80);
  const past = y > (hero ? hero.offsetHeight - 120 : 360);
  document.body.classList.toggle('past-hero', past);
  $('[data-mbar]')?.classList.toggle('show', past);
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Focus trap helper ---------- */
export function trapFocus(container: HTMLElement, onClose: () => void) {
  const sel = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
  function key(e: KeyboardEvent) {
    if (e.key === 'Escape') { onClose(); return; }
    if (e.key !== 'Tab') return;
    const f = $$<HTMLElement>(sel, container).filter(el => el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
    else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
  }
  container.addEventListener('keydown', key);
  return () => container.removeEventListener('keydown', key);
}

/* ---------- Menu ---------- */
const menu = $('[data-menu]');
const openBtn = $<HTMLButtonElement>('[data-menu-open]');
let untrap: (() => void) | null = null;
function closeMenu() {
  if (!menu) return;
  menu.hidden = true; document.documentElement.style.overflow = '';
  openBtn?.setAttribute('aria-expanded', 'false'); untrap?.(); openBtn?.focus();
}
openBtn?.addEventListener('click', () => {
  if (!menu) return;
  menu.hidden = false; document.documentElement.style.overflow = 'hidden';
  openBtn.setAttribute('aria-expanded', 'true');
  untrap = trapFocus(menu, closeMenu);
  $<HTMLElement>('[data-menu-close]', menu)?.focus();
});
$('[data-menu-close]')?.addEventListener('click', closeMenu);

/* ---------- Reveal ---------- */
const revealEls = $$('[data-reveal]');
if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  revealEls.forEach(el => {
    // anything already on screen at load is shown immediately (no flash)
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight * 0.92 && r.bottom > 0) el.classList.add('in'); else io.observe(el);
  });
} else revealEls.forEach(el => el.classList.add('in'));

/* ---------- Tabs (rooms on home, any [data-tabs]) ---------- */
$$('[data-tabs]').forEach(root => {
  const tabs = $$<HTMLButtonElement>('[role="tab"]', root);
  const panels = $$<HTMLElement>('[role="tabpanel"]', root);
  function select(i: number, focus = false) {
    tabs.forEach((t, j) => { t.setAttribute('aria-selected', String(i === j)); t.tabIndex = i === j ? 0 : -1; });
    panels.forEach((p, j) => { p.hidden = i !== j; });
    if (focus) tabs[i].focus();
  }
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i));
    t.addEventListener('keydown', (e) => {
      const k = e.key; let n = -1;
      if (k === 'ArrowDown' || k === 'ArrowRight') n = (i + 1) % tabs.length;
      if (k === 'ArrowUp' || k === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
      if (k === 'Home') n = 0; if (k === 'End') n = tabs.length - 1;
      if (n >= 0) { e.preventDefault(); select(n, true); }
    });
  });
});

/* ---------- Rails ---------- */
$$('[data-rail]').forEach(root => {
  const track = $<HTMLElement>('[data-rail-track]', root);
  const prev = $<HTMLButtonElement>('[data-rail-prev]', root);
  const next = $<HTMLButtonElement>('[data-rail-next]', root);
  if (!track) return;
  const step = () => (track.firstElementChild as HTMLElement)?.offsetWidth + 24 || 320;
  const update = () => {
    if (prev) prev.disabled = track.scrollLeft < 8;
    if (next) next.disabled = track.scrollLeft + track.clientWidth > track.scrollWidth - 8;
  };
  prev?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: reduce ? 'auto' : 'smooth' }));
  next?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: reduce ? 'auto' : 'smooth' }));
  track.addEventListener('scroll', update, { passive: true }); addEventListener('resize', update); update();
});

/* ---------- Local time in Sreemangal ---------- */
$$('[data-localtime]').forEach(el => {
  const f = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Dhaka' });
  const tick = () => { el.textContent = f.format(new Date()); };
  tick(); setInterval(tick, 30000);
});

/* ---------- Toast + demo contact interception ---------- */
const toast = $('[data-toast]');
let toastTimer: number | undefined;
export function showToast(title: string, body: string, pre?: string) {
  if (!toast) return;
  $('[data-toast-title]', toast)!.textContent = title;
  $('[data-toast-body]', toast)!.textContent = body;
  const p = $<HTMLElement>('[data-toast-pre]', toast)!;
  p.hidden = !pre; p.textContent = pre || '';
  toast.classList.add('show');
  clearTimeout(toastTimer); toastTimer = window.setTimeout(() => toast.classList.remove('show'), 12000);
}
$('[data-toast-close]')?.addEventListener('click', () => toast?.classList.remove('show'));

if (document.body.dataset.demo === 'true') {
  document.addEventListener('click', (e) => {
    const a = (e.target as Element).closest<HTMLAnchorElement>('[data-demo-contact]');
    if (!a) return;
    e.preventDefault();
    const kind = a.dataset.demoContact;
    const msg = a.dataset.msg || (window as any).__kuashaMsg || 'Hello Kuasha, I would like to ask about a stay.';
    if (kind === 'whatsapp') showToast('WhatsApp opens here', 'On the live site this opens a WhatsApp chat with reservations, with this message already written:', decodeURIComponent(msg));
    else showToast('This would call reservations', 'On a phone, tapping here dials the reservations desk directly. The number in this demo is a placeholder.');
  });
}

/* ---------- Demo ribbon ---------- */
const ribbon = $('[data-ribbon]');
if (ribbon) {
  let hidden = new URLSearchParams(location.search).has('clean');
  try { if (sessionStorage.getItem('kuasha-ribbon') === '0') hidden = true; if (hidden) sessionStorage.setItem('kuasha-ribbon', '0'); } catch {}
  ribbon.hidden = hidden;
  $('[data-ribbon-close]', ribbon)?.addEventListener('click', () => {
    ribbon.hidden = true; try { sessionStorage.setItem('kuasha-ribbon', '0'); } catch {}
  });
}
