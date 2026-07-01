/* Cliptag account dashboard — Supabase magic-link auth + RLS-protected license view.
   Loaded only on /account. The anon key is public; Row-Level-Security
   (supabase/dashboard-rls.sql) is the only gate. No client writes happen — the page
   just SELECTs the signed-in user's own active license (filtered by verified email). */
import { createClient, type Session } from '@supabase/supabase-js';
import { SUPABASE } from '../config/site';

const $ = (id: string) => document.getElementById(id);
const TIER_RANK: Record<string, number> = { free: 0, creator: 1, pro: 2, studio: 3 };
const TIER_LABEL: Record<string, string> = { free: 'Free', creator: 'Creator', pro: 'Pro', studio: 'Studio' };

const sb = createClient(SUPABASE.url, SUPABASE.anonKey, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
});

type View = 'loading' | 'login' | 'sent' | 'dash';
function show(view: View) {
  (['loading', 'login', 'sent', 'dash'] as View[]).forEach((v) => {
    const el = $(`acct-${v}`);
    if (el) el.style.display = v === view ? '' : 'none';
  });
}

function fmtDate(s?: string | null) {
  if (!s) return '—';
  try {
    return new Date(s).toLocaleDateString(document.documentElement.lang || 'en', {
      year: 'numeric', month: 'short', day: 'numeric',
    });
  } catch {
    return s;
  }
}

async function loadLicense(session: Session) {
  const emailEl = $('acct-email');
  if (emailEl) emailEl.textContent = session.user.email || '';

  // RLS returns only this user's own rows; status filter is belt-and-suspenders.
  const { data, error } = await sb
    .from('licenses')
    .select('key,tier,clip_limit,clips_used,rollover,reset_at,status')
    .eq('status', 'active');

  show('dash');
  const has = $('acct-haslic');
  const no = $('acct-nolic');

  if (error) {
    if (no) { no.style.display = ''; no.textContent = 'Could not load your license. Please try again later.'; }
    if (has) has.style.display = 'none';
    return;
  }

  const rows = (data || []).slice().sort((a, b) => (TIER_RANK[b.tier] || 0) - (TIER_RANK[a.tier] || 0));
  if (!rows.length) {
    if (no) { no.style.display = ''; }
    if (has) has.style.display = 'none';
    return;
  }
  if (no) no.style.display = 'none';
  if (has) has.style.display = '';

  const lic = rows[0];
  const limit = (lic.clip_limit || 0) + (lic.rollover || 0);
  const used = lic.clips_used || 0;
  const remain = Math.max(0, limit - used);

  const set = (id: string, txt: string) => { const el = $(id); if (el) el.textContent = txt; };
  set('acct-plan', TIER_LABEL[lic.tier] || lic.tier || '—');
  set('acct-usage-txt', `${used.toLocaleString()} / ${limit.toLocaleString()} cloud clips used · ${remain.toLocaleString()} left`);
  const bar = $('acct-usage-bar');
  if (bar) bar.style.width = limit ? Math.min(100, Math.round((used / limit) * 100)) + '%' : '0%';
  set('acct-rollover', lic.rollover ? `Includes ${lic.rollover.toLocaleString()} rollover clips this period.` : '');
  set('acct-reset', `Resets ${fmtDate(lic.reset_at)}`);
  set('acct-key', lic.key || '—');
}

function wireLogin() {
  const form = $('acct-login-form') as HTMLFormElement | null;
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = $('acct-login-email') as HTMLInputElement | null;
    const btn = form.querySelector('button[type=submit]') as HTMLButtonElement | null;
    const err = $('acct-login-err');
    const email = (input?.value || '').trim();
    if (!email) return;
    if (btn) btn.disabled = true;
    if (err) err.textContent = '';
    const { error } = await sb.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: location.origin + location.pathname },
    });
    if (btn) btn.disabled = false;
    if (error) { if (err) err.textContent = error.message || 'Could not send the link. Please try again.'; return; }
    const sentTo = $('acct-sent-email');
    if (sentTo) sentTo.textContent = email;
    show('sent');
  });
}

function wireCopy() {
  $('acct-key-copy')?.addEventListener('click', async () => {
    const key = $('acct-key')?.textContent || '';
    if (!key || key === '—') return;
    try {
      await navigator.clipboard.writeText(key);
      const b = $('acct-key-copy');
      if (b) { const t = b.textContent; b.textContent = 'Copied'; setTimeout(() => { b.textContent = t || 'Copy'; }, 1200); }
    } catch {}
  });
}

function wirePortal() {
  $('acct-portal')?.addEventListener('click', async () => {
    const btn = $('acct-portal') as HTMLButtonElement | null;
    const msg = $('acct-portal-msg');
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return;
    if (btn) btn.disabled = true;
    if (msg) msg.textContent = '';
    try {
      const res = await fetch(`${SUPABASE.proxyBase}/v1/account/portal`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${session.access_token}`, 'Content-Type': 'application/json' },
      });
      const j = await res.json().catch(() => ({}));
      if (res.ok && j && j.url) { location.href = j.url; return; }
      if (msg) msg.textContent = 'The billing portal is not available yet. For plan changes, email hello@framepass.io.';
    } catch {
      if (msg) msg.textContent = 'Could not reach the billing portal. Please try again later.';
    }
    if (btn) btn.disabled = false;
  });
}

function wireLogout() {
  $('acct-logout')?.addEventListener('click', async () => { await sb.auth.signOut(); });
}

sb.auth.onAuthStateChange((_evt, session) => {
  if (session) loadLicense(session);
  else show('login');
});

(async () => {
  wireLogin();
  wireCopy();
  wirePortal();
  wireLogout();
  const { data: { session } } = await sb.auth.getSession();
  if (session) await loadLicense(session);
  else show('login');
})();
