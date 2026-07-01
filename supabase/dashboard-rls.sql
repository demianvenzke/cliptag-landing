-- =====================================================================
--  Cliptag Web-Dashboard — Supabase Row-Level-Security (licenses-Tabelle)
--  Im Supabase SQL-Editor ausführen, BEVOR das Dashboard live geht.
--  Zweck: ein eingeloggter Web-Nutzer (Supabase Auth, Magic-Link) darf NUR
--  seine eigene(n) aktive(n) Lizenz(en) lesen — anhand der verifizierten
--  E-Mail. Der anon-Key ist öffentlich → RLS ist die einzige Schranke.
-- =====================================================================

-- 0) Rollover-Spalte (auch vom Proxy-Rollover benötigt)
alter table public.licenses add column if not exists rollover integer not null default 0;

-- 1) RLS aktivieren UND erzwingen (force gilt auch für den Tabellen-Owner)
alter table public.licenses enable row level security;
alter table public.licenses force  row level security;

-- 2) Die EINZIGE Lese-Policy: eigene, aktive Lizenz per verifizierter E-Mail.
--    anon (nicht eingeloggt) bekommt KEINE Policy -> sieht null Zeilen.
drop policy if exists licenses_select_own on public.licenses;
create policy licenses_select_own on public.licenses
  for select to authenticated
  using (
    email is not null
    and status = 'active'
    and lower(email) = lower(auth.jwt() ->> 'email')          -- _write_license schreibt email NICHT lowercase -> lower() auf BEIDEN Seiten ist Pflicht
    -- WICHTIG: Supabase legt email_verified unter user_metadata ab, NICHT top-level.
    -- (auth.jwt() ->> 'email_verified') ist null -> erst user_metadata prüfen, dann Fallback.
    and coalesce(
          (auth.jwt() -> 'user_metadata' ->> 'email_verified')::boolean,
          (auth.jwt() ->> 'email_verified')::boolean,
          false
        ) is true
  );
-- KEINE insert/update/delete-Policy -> alle Client-Schreibzugriffe sind verboten.
-- Schreiben passiert nur server-seitig über den service_key (Webhook, increment_usage, lazy-reset, cancel) und umgeht RLS.

-- 3) Spalten-Rechte: RLS begrenzt ZEILEN, GRANTs begrenzen SPALTEN.
revoke all on public.licenses from anon, authenticated;
grant select (key, tier, clip_limit, clips_used, rollover, reset_at, status)
  on public.licenses to authenticated;
-- email + paddle_subscription_id sind damit NICHT client-sichtbar; key schon (zum Einsetzen in die App).

-- 4) Free-/Geräte-Zeilen (key 'dev_…') haben nie eine E-Mail -> per Policy unsichtbar.
--    Constraint als Absicherung (verhindert, dass je eine dev_-Zeile mit E-Mail entsteht).
alter table public.licenses drop constraint if exists dev_rows_have_no_email;
alter table public.licenses add constraint dev_rows_have_no_email
  check (not (key like 'dev\_%' and email is not null));

-- 5) increment_usage-RPC sperren (PostgREST exponiert /rest/v1/rpc/increment_usage öffentlich).
revoke execute on function public.increment_usage(text, integer) from anon, authenticated, public;
grant  execute on function public.increment_usage(text, integer) to service_role;
-- Empfehlung: increment_usage als SECURITY DEFINER (Owner = privilegierte Rolle) und intern p_n >= 1 clampen,
--            damit selbst ein theoretischer Aufruf weder fremde Keys hochzählt noch negativ bucht.

-- =====================================================================
--  Danach NICHT vergessen (außerhalb dieses Skripts):
--   • Supabase Auth: E-Mail-Bestätigung ERZWINGEN + eindeutige E-Mails (Magic-Link erfüllt das automatisch).
--   • anon (publishable) Key holen -> als PUBLIC_SUPABASE_ANON_KEY in den Landing-Build geben.
--   • Falls der SERVICE-Key je in Frontend-Nähe geriet: jetzt rotieren (er umgeht RLS komplett).
-- =====================================================================
