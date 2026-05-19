# MusicHub — болванка white-label платформы дистрибьюции

**Дата:** 2026-05-20
**Статус:** черновик, ожидает review
**Источник:** заказ на fl.ru (white-label платформа музыкальной дистрибьюции), визуальный референс — `lk.sferoom.space`

## Цель

Сделать визуальную болванку (демо-прототип) музыкальной платформы в стиле SFEROOM: публичный лендинг + личный кабинет с моковыми данными. Назначение — показать заказчику облик и UX, без реальной интеграции с DSP/бэкендом.

Болванка должна:
- демонстрировать ключевые экраны (главная ЛК, каталог, релизы, финансы, профиль);
- быть легко расширяемой (Next.js App Router, типизированные моки);
- работать без бэкенда (статичный билд, фейковый «вход»).

Болванка **не должна**:
- содержать реальную авторизацию, реальные платежи, реальную загрузку треков на DSP;
- покрывать все пункты сайдбара SFEROOM (большая часть — заглушки).

## Стек

| Слой | Технология |
|---|---|
| Фреймворк | Next.js 14, App Router |
| Язык | TypeScript (strict) |
| Стили | Tailwind CSS v3 + tailwindcss-animate |
| Иконки | lucide-react |
| Шрифт | Inter (next/font) |
| Линт | ESLint (next/core-web-vitals) + Prettier |

Намеренно НЕ берём:
- shadcn/ui — раздувает зависимости ради 5–6 примитивов; пишем свои в `components/ui`;
- стейт-менеджеры (Zustand/Redux) — нет логики, которой это нужно;
- next-intl — UI на русском, i18n добавится позднее.

## Палитра и темизация

Тёмная тема — основная. CSS-переменные в `globals.css`:

```
--bg-0:        #0b0b10   (фон страницы)
--bg-1:        #14141c   (сайдбар, карточки)
--bg-2:        #1c1c28   (hover/secondary card)
--border:      #262633
--text-0:      #ffffff
--text-1:      #b4b4c2
--text-2:      #6b6b80
--accent:      #8b5cf6   (фиолетовый primary, ближе к sferoom)
--accent-2:    #6366f1
--success:     #22c55e
--danger:      #ef4444
```

Hero-баннер использует градиент `from-violet-700 via-purple-700 to-fuchsia-700` с эффектом «звёзд» (svg-паттерн).

## Структура страниц

```
/                              публичный лендинг
/login                         форма «входа» (без валидации)
/dashboard                     главная ЛК — основной экран
/dashboard/catalog             каталог релизов (таблица)
/dashboard/releases/new        степпер «Загрузить релиз» (3 шага)
/dashboard/finance             баланс + история операций
/dashboard/profile             форма профиля
/dashboard/events              «Coming soon»
/dashboard/feed                «Coming soon»
/dashboard/messages            «Coming soon»
/dashboard/ai/*                «Coming soon» (все AI-пункты)
/dashboard/promotion           «Coming soon»
/dashboard/support             «Coming soon»
/dashboard/charts              «Coming soon»
```

Маршрутизация через App Router с группой `(lk)` для общего лейаута ЛК.

## Файловая структура

```
.
├── app/
│   ├── layout.tsx                корневой layout (шрифт, тема)
│   ├── page.tsx                  лендинг
│   ├── login/page.tsx
│   └── (lk)/
│       ├── layout.tsx            DashboardShell: сайдбар + топбар
│       └── dashboard/
│           ├── page.tsx          главная
│           ├── catalog/page.tsx
│           ├── releases/new/page.tsx
│           ├── finance/page.tsx
│           ├── profile/page.tsx
│           └── [...stub]/page.tsx  заглушка «Coming soon» для остального
├── components/
│   ├── ui/                       Button, Card, Input, Badge, Avatar
│   ├── layout/                   Sidebar, Topbar, DashboardShell, Footer
│   ├── landing/                  Hero, Features, Pricing, CTA
│   └── dashboard/                HeroBanner, AICardGrid, NewReleases, BalanceCard, ReleaseTable
├── lib/
│   ├── mock/                     releases.ts, tracks.ts, artists.ts, finance.ts
│   └── nav.ts                    конфиг пунктов сайдбара
├── public/                       svg-логотип MusicHub, фоновые паттерны
├── docs/superpowers/specs/       эта спека
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

## Ключевые компоненты

**`layout/Sidebar.tsx`** — фиксированный сайдбар шириной ~232px. Группы пунктов (из `lib/nav.ts`):
- *Общее:* Главная, События, Лента, Профиль, Сообщения, Финансы
- *MusicHub AI:* Ассистент, AI-Студия, AI-Артисты, TextBook, Workspace, TikTok Boss
- *Доп. функции:* Каталог (`/dashboard/catalog`), Продвижение, Релизы (`/dashboard/releases/new`), Поддержка, Тех. чарты

Активный пункт подсвечивается accent-цветом + левой полоской. Без «Coming soon» заглушек в самом сайдбаре — клик ведёт на страницу-заглушку.

**`layout/Topbar.tsx`** — высота 64px, поиск (декоративный), иконки сообщений/уведомлений/настроек, аватар с дропдауном (Профиль / Выйти → `/`).

**`dashboard/HeroBanner.tsx`** — фиолетовый градиентный баннер, заголовок «Создавай и распространяй музыку», подпись, CTA-кнопка «Загрузить релиз» → `/dashboard/releases/new`, справа абстрактная иллюстрация (SVG).

**`dashboard/AICardGrid.tsx`** — горизонтально-скроллящийся ряд из 5 карточек («Турнир месяца», «AI-обложки», «Питч-лист», «Аналитика», «Промо»), каждая — небольшой превью + кнопка.

**`dashboard/NewReleases.tsx`** — 2×3 сетка карточек треков (обложка, название, артист, дата релиза, статус-бейдж).

**`dashboard/BalanceCard.tsx`** (страница финансов) — карточка баланса + кнопка «Вывести», ниже список операций из `lib/mock/finance.ts`.

**`dashboard/ReleaseTable.tsx`** (каталог) — таблица: обложка, название, артист, ISRC, дата, статус (Опубликован / На модерации / Черновик).

## Моковые данные

Все моки — типизированные массивы в `lib/mock/`:

```ts
// lib/mock/releases.ts
export type ReleaseStatus = 'published' | 'review' | 'draft';
export interface Release {
  id: string;
  title: string;
  artist: string;
  cover: string;        // /covers/01.svg (svg-плейсхолдеры в public/)
  isrc: string;
  releasedAt: string;   // ISO
  status: ReleaseStatus;
}
export const releases: Release[] = [ /* ~12 записей */ ];
```

Аналогично `tracks.ts`, `artists.ts`, `finance.ts` (operations + balance).

Обложки — не реальные фото, а сгенерированные SVG-паттерны в `public/covers/` (8–10 штук, ротируются).

## Авторизация (фейковая)

`/login` — два инпута (email/пароль) без валидации, кнопка «Войти» делает `router.push('/dashboard')`. Никаких cookies/токенов/middleware. Топбар-аватар «Выйти» — `router.push('/')`.

Это сознательное решение: реальная авторизация выходит за рамки болванки и потребует бэкенд.

## Адаптивность

- desktop ≥1280: сайдбар развёрнут, всё как на скриншоте SFEROOM;
- 768–1279: сайдбар сжимается в иконки (без подписей);
- <768: сайдбар скрывается в выезжающее меню (кнопка-бургер в топбаре).

Лендинг — полностью адаптивный, стандартные брейкпоинты Tailwind.

## Тестирование

Для болванки автотесты не пишем — это прототип. Проверка: `pnpm build` проходит, `pnpm lint` без ошибок, страницы открываются вручную.

## Git и деплой

- Локальный `user.email = mkoty@yandex.ru`, `user.name = mkoty` (только для этого репо)
- Работаем напрямую в `main`
- Атомарные коммиты по логическим блокам (scaffold → лейаут → главная → остальные страницы → лендинг)
- Деплой не настраиваем; пользователь подключит Vercel сам когда понадобится

## Что НЕ делаем (out of scope)

- Реальная авторизация, OAuth, JWT
- Бэкенд, БД, API-роуты (кроме возможных next-эндпоинтов для health-чека — не нужны)
- Реальная загрузка файлов и интеграция с DSP (Spotify/Apple/VK)
- AI-функции (просто заглушки в сайдбаре)
- Платежи и вывод средств
- i18n
- Темизация (только тёмная)
- E2E/unit тесты

## Открытые вопросы

Нет.
