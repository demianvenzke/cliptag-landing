-- Key-Rotation: Cooldown-Zeitstempel (max. 1 Rotation pro Lizenz pro 24h, siehe Proxy).
-- Einmalig im Supabase SQL-Editor ausfuehren. Ohne diese Spalte funktioniert die Rotation
-- trotzdem (Proxy-Fallback), aber der 24h-Cooldown wird nicht persistiert.
alter table public.licenses add column if not exists key_rotated_at timestamptz;
