# Expense-tracker

A personal expense tracker: monthly income, spending and remaining balance, payment modes (Cash, Google Pay, PhonePe, cards…), category breakdowns and budgets. Login is passwordless by email, and data is stored per user in Supabase.

Plain HTML, CSS and JavaScript — no build step.

## Setup

1. Create a Supabase project and run `supabase/schema.sql` in the SQL Editor.
2. Put the project URL and publishable key in `config.js`.
3. In Supabase → Authentication → URL Configuration, set the Site URL and Redirect URLs to where the app is hosted.

## Run locally

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Then open http://localhost:8080.
