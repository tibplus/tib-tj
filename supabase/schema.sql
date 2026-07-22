-- TIB.TJ — базовая схема для этапа "Пилотные клиники".
-- Пока сайт работает на моковых данных (lib/data.js). Когда будешь готов
-- подключить реальную базу — выполни этот файл в Supabase SQL Editor,
-- затем скажи Claude "подключи Supabase к сайту", и данные на сайте
-- начнут браться отсюда вместо lib/data.js.

create table if not exists specialties (
  id text primary key,
  name_ru text not null,
  name_tg text not null
);

create table if not exists clinics (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  city text not null,
  whatsapp text not null,          -- номер в формате 992XXXXXXXXX, без "+"
  sla_days integer,                -- срок ответа по SLA (для контроля партнёрства)
  commission_percent numeric,      -- комиссия за пациента, % (внутренняя, не публичная)
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists doctors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  specialty_id text references specialties(id),
  clinic_id uuid references clinics(id),
  city text not null,
  whatsapp text not null,
  photo_url text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Учёт заявок из WhatsApp-кнопки (опционально, для аналитики конверсии —
-- заполняется позже через webhook или вручную, не блокирует MVP)
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  doctor_id uuid references doctors(id),
  clinic_id uuid references clinics(id),
  created_at timestamptz not null default now(),
  status text default 'sent' -- sent / confirmed / no_show / billed
);

-- Базовые специальности для старта
insert into specialties (id, name_ru, name_tg) values
  ('cardio', 'Кардиолог', 'Кардиолог'),
  ('neuro', 'Невролог', 'Невролог'),
  ('gastro', 'Гастроэнтеролог', 'Гастроэнтеролог'),
  ('gyneco', 'Гинеколог', 'Гинеколог'),
  ('pediatr', 'Педиатр', 'Педиатр'),
  ('radio', 'Диагностика (МРТ/КТ/УЗИ)', 'Ташхис (МРТ/КТ/УЗИ)')
on conflict (id) do nothing;

-- RLS: включаем и разрешаем публичное чтение (данные не приватные —
-- это открытый каталог врачей/клиник)
alter table specialties enable row level security;
alter table clinics enable row level security;
alter table doctors enable row level security;

create policy "public read specialties" on specialties for select using (true);
create policy "public read active clinics" on clinics for select using (active = true);
create policy "public read active doctors" on doctors for select using (active = true);
