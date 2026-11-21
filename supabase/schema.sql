-- Expense Tracker database schema.
-- Run this once in your Supabase project: Dashboard → SQL Editor → New query → paste → Run.
-- Row Level Security makes sure every user can only see and change their own data.

create table if not exists public.transactions (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users (id) on delete cascade,
  type        text not null check (type in ('expense', 'income')),
  amount      numeric(12, 2) not null check (amount > 0),
  description text not null check (char_length(description) between 1 and 80),
  category    text not null,
  mode        text not null default 'Cash',
  date        date not null,
  created_at  timestamptz not null default now()
);

create index if not exists transactions_user_date_idx on public.transactions (user_id, date desc);

create table if not exists public.budgets (
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  month   text not null check (month ~ '^\d{4}-\d{2}$'),
  amount  numeric(12, 2) not null check (amount > 0),
  primary key (user_id, month)
);

alter table public.transactions enable row level security;
alter table public.budgets enable row level security;

drop policy if exists "Users manage their own transactions" on public.transactions;
create policy "Users manage their own transactions" on public.transactions
  for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users manage their own budgets" on public.budgets;
create policy "Users manage their own budgets" on public.budgets
  for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
