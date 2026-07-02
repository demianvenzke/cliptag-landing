/* Cliptag landing — all client interactivity (one bundle).
   Progressive enhancement: every section renders & reads fine with this disabled. */

import { PADDLE, SITE } from '../config/site';

const reduced =
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Nav: translucent backdrop once scrolled past the hero ─────────────────── */
(() => {
  const nav = document.getElementById('ct-nav');
  const top = document.getElementById('top');
  if (!nav || !top) return;
  const onScroll = () => {
    const scrolled = top.getBoundingClientRect().top < 30;
    nav.style.background = scrolled ? 'rgba(16,15,20,0.74)' : 'rgba(16,15,20,0)';
    nav.style.setProperty('backdrop-filter', scrolled ? 'saturate(180%) blur(20px)' : 'none');
    nav.style.setProperty('-webkit-backdrop-filter', scrolled ? 'saturate(180%) blur(20px)' : 'none');
    nav.style.borderBottomColor = scrolled ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0)';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Reveal-on-scroll ──────────────────────────────────────────────────────── */
(() => {
  const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!reveals.length) return;
  const showAll = () => reveals.forEach((el) => el.setAttribute('data-shown', '1'));
  if (reduced || !('IntersectionObserver' in window)) {
    showAll();
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.setAttribute('data-shown', '1');
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
  );
  reveals.forEach((el) => io.observe(el));
  setTimeout(showAll, 2000); // safety net
})();

/* ── Language dropdown ─────────────────────────────────────────────────────── */
(() => {
  const btn = document.getElementById('ct-langbtn');
  const menu = document.getElementById('ct-langmenu');
  const caret = document.getElementById('ct-langcaret');
  if (!btn || !menu) return;
  const wrap = btn.closest('[data-langmenu]');
  const setOpen = (open: boolean) => {
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (caret) caret.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
  };
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    setOpen(menu.hidden);
  });
  document.addEventListener('click', (e) => {
    if (wrap && !wrap.contains(e.target as Node)) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
  document.querySelectorAll<HTMLElement>('[data-setlang]').forEach((a) => {
    a.addEventListener('click', () => {
      try {
        localStorage.setItem('ct_lang', a.getAttribute('data-setlang') || '');
      } catch {}
    });
  });
})();

/* ── Pricing: billing toggle ───────────────────────────────────────────────── */
(() => {
  const pricing = document.getElementById('pricing');
  const toggle = document.getElementById('ct-bill-toggle');
  if (!pricing) return;
  const setBilling = (mode: string) => {
    pricing.setAttribute('data-billing', mode);
    if (toggle) toggle.setAttribute('aria-checked', mode === 'yearly' ? 'true' : 'false');
    document.querySelectorAll<HTMLAnchorElement>('[data-href-monthly]').forEach((a) => {
      const href = a.getAttribute(mode === 'yearly' ? 'data-href-yearly' : 'data-href-monthly');
      if (href) a.setAttribute('href', href);
    });
  };
  toggle?.addEventListener('click', () => {
    setBilling((pricing.getAttribute('data-billing') || 'yearly') === 'yearly' ? 'monthly' : 'yearly');
  });
  document.querySelectorAll<HTMLElement>('[data-billing-set]').forEach((b) => {
    b.addEventListener('click', () => setBilling(b.getAttribute('data-billing-set') || 'yearly'));
  });
  setBilling(pricing.getAttribute('data-billing') || 'yearly'); // sync CTA hrefs
})();

/* ── FAQ accordion (single open) ───────────────────────────────────────────── */
(() => {
  const heads = Array.from(document.querySelectorAll<HTMLElement>('.ct-faq-head'));
  heads.forEach((head) => {
    head.addEventListener('click', () => {
      const item = head.closest('[data-faq-item]');
      if (!item) return;
      const isOpen = item.hasAttribute('data-open');
      document.querySelectorAll('[data-faq-item][data-open]').forEach((it) => {
        it.removeAttribute('data-open');
        it.querySelector('.ct-faq-head')?.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.setAttribute('data-open', '');
        head.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();

/* ── Toast: hero mockup preview hint + pre-launch "coming soon" CTAs ────────── */
(() => {
  const toast = document.getElementById('ct-toast');
  if (!toast) return;
  const textEl = document.getElementById('ct-toast-text');
  let timer: number | undefined;
  const show = (msg?: string | null) => {
    if (textEl && msg) textEl.textContent = msg;
    toast.setAttribute('data-show', '');
    clearTimeout(timer);
    timer = window.setTimeout(() => toast.removeAttribute('data-show'), 3400);
  };
  // Hero mockup → preview hint. (Placeholder CTAs (href="#") are handled by the
  // NotifyModal component, which opens the "coming soon" + notify-me modal.)
  document.querySelectorAll<HTMLElement>('[data-toast-trigger]').forEach((el) => {
    el.addEventListener('click', () => show(toast.getAttribute('data-preview')));
  });
})();

/* ── Hero analysis demo loop ───────────────────────────────────────────────── */
(() => {
  const demo = document.getElementById('ct-demo');
  if (!demo) return;
  const rows = Array.from(demo.querySelectorAll<HTMLElement>('[data-demo-row]'));
  const total = rows.length;
  if (!total) return;
  const tpl = demo.getAttribute('data-count-tpl') || '{d} / {t}';
  const barEl = document.getElementById('ct-demo-bar');
  const countEl = document.getElementById('ct-demo-count');
  const pctEl = document.getElementById('ct-demo-pct');

  const apply = (step: number) => {
    rows.forEach((row, i) => {
      const st = i < step ? 'done' : i === step ? 'scanning' : 'queued';
      row.setAttribute('data-state', st);
      const meta = row.querySelector<HTMLElement>('.demo-meta');
      if (meta) {
        if (st === 'done') {
          meta.textContent = row.getAttribute('data-specs') || '';
          meta.style.color = '#8b8694';
        } else if (st === 'queued') {
          meta.textContent = row.getAttribute('data-wait') || '';
          meta.style.color = '#6d6879';
        } else {
          meta.textContent = '';
        }
      }
    });
    const done = Math.min(step, total);
    const pct = Math.round((done / total) * 100) + '%';
    if (barEl) barEl.style.width = pct;
    if (countEl) countEl.textContent = tpl.replace('{d}', String(done)).replace('{t}', String(total));
    if (pctEl) pctEl.textContent = pct;
  };

  if (reduced) {
    apply(total); // resting state: all analyzed
    return;
  }
  let step = 0;
  apply(step);
  const tick = () => {
    const dwell = step >= total ? 2400 : 1500;
    window.setTimeout(() => {
      step = step >= total ? 0 : step + 1;
      apply(step);
      tick();
    }, dwell);
  };
  tick();
})();

/* ── Soft geo language suggestion (home, English, no stored preference) ─────── */
/* TODO: ipapi.co is rate-limited on the free tier — swap for your own/server-side
   geo before high traffic, and add the endpoint to your CSP connect-src. */
(() => {
  try {
    if (document.documentElement.lang !== 'en' || location.pathname !== '/') return;
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('ct_lang');
    } catch {}
    if (saved || sessionStorage.getItem('ct_geo')) return;
    sessionStorage.setItem('ct_geo', '1');
    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((d) => {
        const c = ((d && d.country_code) || '').toUpperCase();
        const map: Record<string, string> = {
          DE: 'de', AT: 'de', CH: 'de', LI: 'de', FR: 'fr', BE: 'fr',
          ES: 'es', MX: 'es', AR: 'es', CO: 'es', PT: 'pt', BR: 'pt', IT: 'it',
        };
        const g = map[c];
        if (g) location.replace('/' + g);
      })
      .catch(() => {});
  } catch {}
})();

/* ── Paddle.js overlay checkout ────────────────────────────────────────────── */
/* Dormant while SITE.comingSoon is true (then the NotifyModal handles the
   placeholder CTAs). Once live, paid plan CTAs open the Paddle checkout overlay
   with the price id for the selected billing cycle. Paddle.js is lazy-loaded on
   the first click so it never weighs down the initial page. */
(() => {
  if (SITE.comingSoon || !PADDLE.token) return;
  const ctas = Array.from(document.querySelectorAll<HTMLElement>('a[data-paddle]'));
  if (!ctas.length) return;

  let ready: Promise<any> | null = null;
  const loadPaddle = () => {
    if (ready) return ready;
    ready = new Promise<any>((resolve, reject) => {
      const w = window as any;
      const init = () => {
        try {
          if (PADDLE.environment === 'sandbox' && w.Paddle?.Environment?.set) {
            w.Paddle.Environment.set('sandbox');
          }
          w.Paddle.Initialize({ token: PADDLE.token });
          resolve(w.Paddle);
        } catch (err) {
          reject(err);
        }
      };
      if (w.Paddle) return init();
      const s = document.createElement('script');
      s.src = 'https://cdn.paddle.com/paddle/v2/paddle.js';
      s.onload = init;
      s.onerror = reject;
      document.head.appendChild(s);
    });
    return ready;
  };

  const pricing = document.getElementById('pricing');
  const isYearly = () => (pricing?.getAttribute('data-billing') || 'yearly') !== 'monthly';

  ctas.forEach((cta) => {
    cta.addEventListener('click', (e) => {
      const priceId = cta.getAttribute(isYearly() ? 'data-price-yearly' : 'data-price-monthly');
      if (!priceId) return; // no price wired → fall through to default href
      e.preventDefault();
      loadPaddle()
        .then((Paddle) =>
          Paddle.Checkout.open({
            items: [{ priceId, quantity: 1 }],
            settings: { displayMode: 'overlay', locale: document.documentElement.lang || 'en' },
          }),
        )
        .catch(() => {});
    });
  });
})();

/* Download-Tracking: Klick auf einen .dmg-Link → benanntes Event in GA + PostHog.
   Fire-and-forget (blockiert den Download NICHT); beide Tools sind consent-gated,
   die Aufrufe sind bei fehlendem Consent/Load harmlose No-ops. */
document.addEventListener(
  'click',
  (e) => {
    const el: any = e.target;
    const a = el && el.closest ? el.closest('a[href*=".dmg"]') : null;
    if (!a) return;
    const file = (a.getAttribute('href') || '').split('/').pop() || 'Cliptag.dmg';
    const ver = (file.match(/(\d+\.\d+\.\d+)/) || [])[1] || ''; // aus Dateinamen -> kein Hardcoding
    const w: any = window;
    try { w.gtag && w.gtag('event', 'download', { file_name: file, app_version: ver }); } catch (_) {}
    try { w.posthog && w.posthog.capture && w.posthog.capture('app_download', { version: ver, platform: 'mac', file }); } catch (_) {}
  },
  true,
);
