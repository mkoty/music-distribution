# MusicHub

White-label прототип платформы музыкальной дистрибьюции. Лендинг + личный кабинет на Next.js 14 со статичными моковыми данными.

## Запуск

```bash
pnpm install
pnpm dev
```

Открыть http://localhost:3000

## Структура

- `/` — лендинг (Hero, Features, Pricing, CTA)
- `/login` — фейковая авторизация (любой ввод → редирект в ЛК)
- `/dashboard` — главная ЛК (баннер, AI-карточки, новинки)
- `/dashboard/catalog` — каталог релизов
- `/dashboard/finance` — баланс и история операций
- `/dashboard/profile` — форма профиля
- `/dashboard/releases/new` — мастер загрузки релиза
- остальные пункты сайдбара — заглушки «Coming soon»

## Стек

Next.js 14 (App Router) · TypeScript · Tailwind CSS · lucide-react

## Скрипты

- `pnpm dev` — dev-сервер
- `pnpm build` — продакшен-сборка
- `pnpm lint` — ESLint

## Документация

- Спека: `docs/superpowers/specs/2026-05-20-musichub-skeleton-design.md`
- План реализации: `docs/superpowers/plans/2026-05-20-musichub-skeleton.md`
