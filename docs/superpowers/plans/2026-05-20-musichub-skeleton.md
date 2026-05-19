# MusicHub Skeleton Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static white-label music-distribution prototype (landing + LK) in the visual style of `lk.sferoom.space`, with mock data and no backend.

**Architecture:** Next.js 14 App Router monorepo-less project. Dark theme via Tailwind tokens. Two route groups: public (`/`, `/login`) and LK (`(lk)/dashboard/*`) sharing a `DashboardShell` layout (sidebar + topbar). Typed mock data in `lib/mock/`. No real auth — login button just routes to `/dashboard`.

**Tech Stack:** Next.js 14, TypeScript (strict), Tailwind CSS, lucide-react, Inter via next/font.

**Note on TDD:** Болванка визуальная, юнит-тестов в плане нет. Валидация — `pnpm build`, `pnpm lint`, ручной обзор страниц.

---

## Task 1: Configure local git user

**Files:** none (git config only)

- [ ] **Step 1: Set local git user**

```bash
cd /Users/mac/Documents/music-distribution
git config user.email "mkoty@yandex.ru"
git config user.name "mkoty"
git config --local --get user.email   # → mkoty@yandex.ru
git config --local --get user.name    # → mkoty
```

Expected output for last two lines: `mkoty@yandex.ru` and `mkoty`.

---

## Task 2: Scaffold Next.js project

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs`, `.eslintrc.json`, `.gitignore`, `.prettierrc`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "musichub",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "lucide-react": "^0.453.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4"
  },
  "devDependencies": {
    "@types/node": "^20.16.10",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^8.57.1",
    "eslint-config-next": "14.2.5",
    "postcss": "^8.4.47",
    "prettier": "^3.3.3",
    "prettier-plugin-tailwindcss": "^0.6.8",
    "tailwindcss": "^3.4.13",
    "typescript": "^5.6.2"
  }
}
```

- [ ] **Step 2: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Create `next.config.mjs`**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};
export default nextConfig;
```

- [ ] **Step 4: Create `tailwind.config.ts`**

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: { 0: '#0b0b10', 1: '#14141c', 2: '#1c1c28' },
        border: { DEFAULT: '#262633' },
        text: { 0: '#ffffff', 1: '#b4b4c2', 2: '#6b6b80' },
        accent: { DEFAULT: '#8b5cf6', 2: '#6366f1' }
      },
      fontFamily: { sans: ['var(--font-inter)', 'system-ui', 'sans-serif'] },
      borderRadius: { xl2: '1rem' }
    }
  },
  plugins: []
};
export default config;
```

- [ ] **Step 5: Create `postcss.config.mjs`**

```js
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} }
};
```

- [ ] **Step 6: Create `.eslintrc.json`**

```json
{ "extends": "next/core-web-vitals" }
```

- [ ] **Step 7: Create `.prettierrc`**

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "none",
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

- [ ] **Step 8: Create `.gitignore`**

```
node_modules
.next
out
dist
.env*.local
.DS_Store
*.log
```

- [ ] **Step 9: Create `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body { background: #0b0b10; color: #ffffff; }
body { font-family: var(--font-inter), system-ui, sans-serif; }

::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #262633; border-radius: 4px; }
```

- [ ] **Step 10: Create `app/layout.tsx`**

```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'MusicHub — музыкальная дистрибьюция',
  description: 'White-label платформа для дистрибьюции музыки'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="min-h-screen bg-bg-0 text-text-0 antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 11: Create temporary `app/page.tsx`** (заменим в задаче 7)

```tsx
export default function HomePage() {
  return <main className="p-10">MusicHub — landing placeholder</main>;
}
```

- [ ] **Step 12: Install and verify build**

```bash
cd /Users/mac/Documents/music-distribution
pnpm install || npm install
pnpm build || npm run build
```

Expected: build succeeds, `.next` directory created.

- [ ] **Step 13: Commit**

```bash
git add -A
git commit -m "chore: scaffold next.js project with tailwind and tooling"
```

---

## Task 3: Shared UI primitives

**Files:**
- Create: `lib/cn.ts`, `components/ui/Button.tsx`, `components/ui/Card.tsx`, `components/ui/Input.tsx`, `components/ui/Badge.tsx`, `components/ui/Avatar.tsx`

- [ ] **Step 1: Create `lib/cn.ts`**

```ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Create `components/ui/Button.tsx`**

```tsx
import { cn } from '@/lib/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary: 'bg-accent hover:bg-accent-2 text-white',
  secondary: 'bg-bg-2 hover:bg-bg-1 text-text-0 border border-border',
  ghost: 'bg-transparent hover:bg-bg-2 text-text-1'
};

const sizes: Record<Size, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base'
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = 'primary', size = 'md', ...rest }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...rest}
    />
  )
);
Button.displayName = 'Button';
```

- [ ] **Step 3: Create `components/ui/Card.tsx`**

```tsx
import { cn } from '@/lib/cn';
import { HTMLAttributes } from 'react';

export function Card({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('rounded-xl2 border border-border bg-bg-1 p-5', className)}
      {...rest}
    />
  );
}
```

- [ ] **Step 4: Create `components/ui/Input.tsx`**

```tsx
import { cn } from '@/lib/cn';
import { InputHTMLAttributes, forwardRef } from 'react';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...rest }, ref) => (
    <input
      ref={ref}
      className={cn(
        'h-10 w-full rounded-xl border border-border bg-bg-2 px-4 text-sm text-text-0 placeholder:text-text-2 outline-none focus:border-accent',
        className
      )}
      {...rest}
    />
  )
);
Input.displayName = 'Input';
```

- [ ] **Step 5: Create `components/ui/Badge.tsx`**

```tsx
import { cn } from '@/lib/cn';
import { HTMLAttributes } from 'react';

type Tone = 'neutral' | 'success' | 'warning' | 'danger' | 'accent';

const tones: Record<Tone, string> = {
  neutral: 'bg-bg-2 text-text-1',
  success: 'bg-emerald-500/15 text-emerald-400',
  warning: 'bg-amber-500/15 text-amber-400',
  danger: 'bg-red-500/15 text-red-400',
  accent: 'bg-accent/15 text-accent'
};

export function Badge({
  className,
  tone = 'neutral',
  ...rest
}: HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        tones[tone],
        className
      )}
      {...rest}
    />
  );
}
```

- [ ] **Step 6: Create `components/ui/Avatar.tsx`**

```tsx
import { cn } from '@/lib/cn';

export function Avatar({
  name,
  className
}: {
  name: string;
  className?: string;
}) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return (
    <div
      className={cn(
        'flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-sm font-semibold text-white',
        className
      )}
    >
      {initials}
    </div>
  );
}
```

- [ ] **Step 7: Commit**

```bash
git add lib components/ui
git commit -m "feat: add shared ui primitives (Button, Card, Input, Badge, Avatar)"
```

---

## Task 4: Mock data and nav config

**Files:**
- Create: `lib/nav.ts`, `lib/mock/releases.ts`, `lib/mock/tracks.ts`, `lib/mock/artists.ts`, `lib/mock/finance.ts`

- [ ] **Step 1: Create `lib/nav.ts`**

```ts
import {
  Home, Calendar, Newspaper, User, MessageSquare, Wallet,
  Bot, Sparkles, Mic2, BookOpen, Layers, TrendingUp,
  FolderOpen, Megaphone, Disc3, LifeBuoy, BarChart3,
  type LucideIcon
} from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  comingSoon?: boolean;
}

export interface NavGroup {
  title?: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    items: [
      { label: 'Главная', href: '/dashboard', icon: Home },
      { label: 'События', href: '/dashboard/events', icon: Calendar, comingSoon: true },
      { label: 'Лента', href: '/dashboard/feed', icon: Newspaper, comingSoon: true },
      { label: 'Профиль', href: '/dashboard/profile', icon: User },
      { label: 'Сообщения', href: '/dashboard/messages', icon: MessageSquare, comingSoon: true },
      { label: 'Финансы', href: '/dashboard/finance', icon: Wallet }
    ]
  },
  {
    title: 'MusicHub AI',
    items: [
      { label: 'Ассистент', href: '/dashboard/ai/assistant', icon: Bot, comingSoon: true },
      { label: 'AI-Студия', href: '/dashboard/ai/studio', icon: Sparkles, comingSoon: true },
      { label: 'AI-Артисты', href: '/dashboard/ai/artists', icon: Mic2, comingSoon: true },
      { label: 'TextBook', href: '/dashboard/ai/textbook', icon: BookOpen, comingSoon: true },
      { label: 'Workspace', href: '/dashboard/ai/workspace', icon: Layers, comingSoon: true },
      { label: 'Промо-бот', href: '/dashboard/ai/promo', icon: TrendingUp, comingSoon: true }
    ]
  },
  {
    title: 'Дополнительно',
    items: [
      { label: 'Каталог', href: '/dashboard/catalog', icon: FolderOpen },
      { label: 'Продвижение', href: '/dashboard/promotion', icon: Megaphone, comingSoon: true },
      { label: 'Релизы', href: '/dashboard/releases/new', icon: Disc3 },
      { label: 'Поддержка', href: '/dashboard/support', icon: LifeBuoy, comingSoon: true },
      { label: 'Тех. чарты', href: '/dashboard/charts', icon: BarChart3, comingSoon: true }
    ]
  }
];
```

- [ ] **Step 2: Create `lib/mock/releases.ts`**

```ts
export type ReleaseStatus = 'published' | 'review' | 'draft';

export interface Release {
  id: string;
  title: string;
  artist: string;
  coverGradient: string;
  isrc: string;
  releasedAt: string;
  status: ReleaseStatus;
}

const g = [
  'from-violet-600 to-fuchsia-600',
  'from-indigo-600 to-cyan-500',
  'from-pink-600 to-orange-500',
  'from-emerald-500 to-teal-500',
  'from-amber-500 to-rose-500',
  'from-sky-500 to-blue-700'
];

export const releases: Release[] = [
  { id: 'r1', title: 'Северное сияние', artist: 'NEONOVA', coverGradient: g[0], isrc: 'RU-A0-26-00001', releasedAt: '2026-04-12', status: 'published' },
  { id: 'r2', title: 'Полночь',         artist: 'Артур Ли',  coverGradient: g[1], isrc: 'RU-A0-26-00002', releasedAt: '2026-04-20', status: 'published' },
  { id: 'r3', title: 'Lo-Fi мечты',     artist: 'lunavox',   coverGradient: g[2], isrc: 'RU-A0-26-00003', releasedAt: '2026-05-01', status: 'review'    },
  { id: 'r4', title: 'Tempo',           artist: 'Мирон К.',  coverGradient: g[3], isrc: 'RU-A0-26-00004', releasedAt: '2026-05-08', status: 'published' },
  { id: 'r5', title: 'Память воды',     artist: 'NEONOVA',   coverGradient: g[4], isrc: 'RU-A0-26-00005', releasedAt: '2026-05-15', status: 'draft'     },
  { id: 'r6', title: 'Огни города',     artist: 'Sasha Volt',coverGradient: g[5], isrc: 'RU-A0-26-00006', releasedAt: '2026-05-18', status: 'review'    },
  { id: 'r7', title: 'Стекло',          artist: 'Ника Ро',   coverGradient: g[0], isrc: 'RU-A0-26-00007', releasedAt: '2026-03-22', status: 'published' },
  { id: 'r8', title: 'Драйв',           artist: 'Артур Ли',  coverGradient: g[1], isrc: 'RU-A0-26-00008', releasedAt: '2026-03-10', status: 'published' }
];
```

- [ ] **Step 3: Create `lib/mock/tracks.ts`**

```ts
export interface Track {
  id: string;
  title: string;
  artist: string;
  coverGradient: string;
  plays: number;
  durationSec: number;
}

const g = [
  'from-violet-600 to-fuchsia-600',
  'from-indigo-600 to-cyan-500',
  'from-pink-600 to-orange-500',
  'from-emerald-500 to-teal-500',
  'from-amber-500 to-rose-500',
  'from-sky-500 to-blue-700'
];

export const newReleases: Track[] = [
  { id: 't1', title: 'Bonjour',       artist: 'NEONOVA',    coverGradient: g[0], plays: 124_500, durationSec: 184 },
  { id: 't2', title: 'Куда уходим',   artist: 'Артур Ли',   coverGradient: g[1], plays: 84_010,  durationSec: 212 },
  { id: 't3', title: 'Tango',         artist: 'lunavox',    coverGradient: g[2], plays: 65_220,  durationSec: 197 },
  { id: 't4', title: 'Ты — мой дом',  artist: 'Мирон К.',   coverGradient: g[3], plays: 51_900,  durationSec: 168 },
  { id: 't5', title: 'Piano',         artist: 'Sasha Volt', coverGradient: g[4], plays: 42_700,  durationSec: 224 },
  { id: 't6', title: 'Лиман',         artist: 'Ника Ро',    coverGradient: g[5], plays: 33_010,  durationSec: 201 }
];
```

- [ ] **Step 4: Create `lib/mock/artists.ts`**

```ts
export interface Artist {
  id: string;
  name: string;
  role: string;
  avatarGradient: string;
}

export const artists: Artist[] = [
  { id: 'a1', name: 'NEONOVA',    role: 'Артист',    avatarGradient: 'from-violet-600 to-fuchsia-600' },
  { id: 'a2', name: 'Артур Ли',   role: 'Артист',    avatarGradient: 'from-indigo-600 to-cyan-500' },
  { id: 'a3', name: 'lunavox',    role: 'Артист',    avatarGradient: 'from-pink-600 to-orange-500' },
  { id: 'a4', name: 'Мирон К.',   role: 'Продюсер',  avatarGradient: 'from-emerald-500 to-teal-500' }
];
```

- [ ] **Step 5: Create `lib/mock/finance.ts`**

```ts
export interface Operation {
  id: string;
  date: string;
  kind: 'payout' | 'royalty' | 'fee';
  source: string;
  amountRub: number;
}

export const balanceRub = 184_320;

export const operations: Operation[] = [
  { id: 'o1', date: '2026-05-18', kind: 'royalty', source: 'Spotify',     amountRub: 24_300 },
  { id: 'o2', date: '2026-05-15', kind: 'royalty', source: 'Apple Music', amountRub: 18_960 },
  { id: 'o3', date: '2026-05-12', kind: 'royalty', source: 'VK Музыка',   amountRub: 12_540 },
  { id: 'o4', date: '2026-05-09', kind: 'payout',  source: 'Вывод на карту', amountRub: -80_000 },
  { id: 'o5', date: '2026-05-04', kind: 'royalty', source: 'Яндекс Музыка', amountRub: 21_770 },
  { id: 'o6', date: '2026-04-28', kind: 'fee',     source: 'Комиссия платформы', amountRub: -1_200 }
];
```

- [ ] **Step 6: Commit**

```bash
git add lib/nav.ts lib/mock
git commit -m "feat: add nav config and mock data (releases, tracks, artists, finance)"
```

---

## Task 5: Dashboard shell (sidebar + topbar)

**Files:**
- Create: `components/layout/Sidebar.tsx`, `components/layout/Topbar.tsx`, `components/layout/DashboardShell.tsx`, `app/(lk)/layout.tsx`

- [ ] **Step 1: Create `components/layout/Sidebar.tsx`**

```tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Music2 } from 'lucide-react';
import { navGroups } from '@/lib/nav';
import { cn } from '@/lib/cn';

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden lg:flex w-60 shrink-0 flex-col border-r border-border bg-bg-1">
      <Link href="/dashboard" className="flex items-center gap-2 px-5 h-16 border-b border-border">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2">
          <Music2 className="h-4 w-4 text-white" />
        </div>
        <span className="font-semibold tracking-tight">MusicHub</span>
      </Link>
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navGroups.map((group, gi) => (
          <div key={gi}>
            {group.title && (
              <div className="px-3 mb-2 text-[11px] uppercase tracking-wider text-text-2">
                {group.title}
              </div>
            )}
            <ul className="space-y-1">
              {group.items.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== '/dashboard' && pathname.startsWith(item.href));
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'group flex items-center gap-3 rounded-lg px-3 py-2 text-sm',
                        active
                          ? 'bg-accent/15 text-text-0'
                          : 'text-text-1 hover:bg-bg-2 hover:text-text-0'
                      )}
                    >
                      <Icon className={cn('h-4 w-4 shrink-0', active && 'text-accent')} />
                      <span className="truncate">{item.label}</span>
                      {item.comingSoon && (
                        <span className="ml-auto text-[10px] uppercase text-text-2">soon</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
```

- [ ] **Step 2: Create `components/layout/Topbar.tsx`**

```tsx
'use client';
import Link from 'next/link';
import { Bell, MessageSquare, Search, Settings } from 'lucide-react';
import { Avatar } from '@/components/ui/Avatar';

export function Topbar() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-border bg-bg-0/80 px-6 backdrop-blur">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-2" />
        <input
          placeholder="Поиск релизов, артистов, треков…"
          className="h-10 w-full rounded-xl border border-border bg-bg-1 pl-9 pr-4 text-sm text-text-0 placeholder:text-text-2 outline-none focus:border-accent"
        />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <button className="grid h-10 w-10 place-items-center rounded-xl bg-bg-1 text-text-1 hover:bg-bg-2">
          <MessageSquare className="h-4 w-4" />
        </button>
        <button className="grid h-10 w-10 place-items-center rounded-xl bg-bg-1 text-text-1 hover:bg-bg-2">
          <Bell className="h-4 w-4" />
        </button>
        <button className="grid h-10 w-10 place-items-center rounded-xl bg-bg-1 text-text-1 hover:bg-bg-2">
          <Settings className="h-4 w-4" />
        </button>
        <Link href="/" className="ml-2">
          <Avatar name="Стёпа С" />
        </Link>
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Create `components/layout/DashboardShell.tsx`**

```tsx
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-bg-0">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="flex-1 px-6 py-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Create `app/(lk)/layout.tsx`**

```tsx
import { DashboardShell } from '@/components/layout/DashboardShell';

export default function LkLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}
```

- [ ] **Step 5: Commit**

```bash
git add components/layout app/\(lk\)/layout.tsx
git commit -m "feat: dashboard shell — sidebar, topbar, layout"
```

---

## Task 6: Dashboard home page

**Files:**
- Create: `components/dashboard/HeroBanner.tsx`, `components/dashboard/AICardGrid.tsx`, `components/dashboard/NewReleases.tsx`, `components/dashboard/SectionHeader.tsx`, `app/(lk)/dashboard/page.tsx`

- [ ] **Step 1: Create `components/dashboard/SectionHeader.tsx`**

```tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SectionHeader({
  title,
  hrefAll
}: {
  title: string;
  hrefAll?: string;
}) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-lg font-semibold">{title}</h2>
      {hrefAll && (
        <Link
          href={hrefAll}
          className="inline-flex items-center gap-1 text-sm text-text-1 hover:text-text-0"
        >
          Смотреть все <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Create `components/dashboard/HeroBanner.tsx`**

```tsx
import Link from 'next/link';
import { Sparkles, Upload } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-700 p-8 md:p-10">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.18),transparent_50%)]" />
      <div className="relative max-w-2xl">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs">
          <Sparkles className="h-3 w-3" />
          Новинка
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
          Создавай, выпускай и продвигай музыку — в одной платформе
        </h1>
        <p className="mt-3 text-white/80">
          Загружай релизы на Spotify, Apple Music, VK и Яндекс. Следи за статистикой и роялти в реальном времени.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/dashboard/releases/new">
            <Button className="bg-white text-violet-800 hover:bg-white/90">
              <Upload className="h-4 w-4" />
              Загрузить релиз
            </Button>
          </Link>
          <Link href="/dashboard/catalog">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Мой каталог
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `components/dashboard/AICardGrid.tsx`**

```tsx
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Trophy, ImageIcon, ListMusic, BarChart3, Megaphone } from 'lucide-react';

interface AIItem {
  title: string;
  subtitle: string;
  icon: typeof Trophy;
  accent: string;
}

const items: AIItem[] = [
  { title: 'Турнир месяца', subtitle: 'Призовой фонд 100 000 ₽', icon: Trophy,    accent: 'from-amber-500 to-rose-500' },
  { title: 'AI-обложки',    subtitle: 'Сгенерируй за минуту',     icon: ImageIcon, accent: 'from-violet-600 to-fuchsia-600' },
  { title: 'Питч-лист',     subtitle: 'Попади в плейлисты',       icon: ListMusic, accent: 'from-indigo-600 to-cyan-500' },
  { title: 'Аналитика',     subtitle: 'Стримы и аудитория',       icon: BarChart3, accent: 'from-emerald-500 to-teal-500' },
  { title: 'Промо',         subtitle: 'Реклама в соцсетях',       icon: Megaphone, accent: 'from-pink-600 to-orange-500' }
];

export function AICardGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <Card key={it.title} className="flex flex-col gap-3">
            <div
              className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${it.accent}`}
            >
              <Icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-medium">{it.title}</div>
              <div className="mt-1 text-xs text-text-2">{it.subtitle}</div>
            </div>
            <Button size="sm" variant="secondary" className="mt-auto">
              Открыть
            </Button>
          </Card>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 4: Create `components/dashboard/NewReleases.tsx`**

```tsx
import { Card } from '@/components/ui/Card';
import { Play } from 'lucide-react';
import { newReleases } from '@/lib/mock/tracks';

function fmtPlays(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
}

function fmtDur(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, '0')}`;
}

export function NewReleases() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {newReleases.map((t) => (
        <Card key={t.id} className="flex items-center gap-4">
          <div
            className={`relative grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${t.coverGradient}`}
          >
            <Play className="h-5 w-5 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate font-medium">{t.title}</div>
            <div className="truncate text-xs text-text-2">{t.artist}</div>
          </div>
          <div className="text-right text-xs text-text-2">
            <div>{fmtPlays(t.plays)} прослуш.</div>
            <div className="mt-0.5">{fmtDur(t.durationSec)}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
```

- [ ] **Step 5: Create `app/(lk)/dashboard/page.tsx`**

```tsx
import { HeroBanner } from '@/components/dashboard/HeroBanner';
import { AICardGrid } from '@/components/dashboard/AICardGrid';
import { NewReleases } from '@/components/dashboard/NewReleases';
import { SectionHeader } from '@/components/dashboard/SectionHeader';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <HeroBanner />
      <section>
        <SectionHeader title="Возможности" />
        <AICardGrid />
      </section>
      <section>
        <SectionHeader title="Новинки" hrefAll="/dashboard/catalog" />
        <NewReleases />
      </section>
    </div>
  );
}
```

- [ ] **Step 6: Verify**

```bash
pnpm dev &
sleep 4
curl -s http://localhost:3000/dashboard | head -20
kill %1 2>/dev/null
```

Expected: 200 OK with HTML containing "MusicHub".

- [ ] **Step 7: Commit**

```bash
git add components/dashboard app/\(lk\)/dashboard/page.tsx
git commit -m "feat: dashboard home — hero, ai cards, new releases"
```

---

## Task 7: Catalog, Finance, Profile, Releases-new pages

**Files:**
- Create: `app/(lk)/dashboard/catalog/page.tsx`, `app/(lk)/dashboard/finance/page.tsx`, `app/(lk)/dashboard/profile/page.tsx`, `app/(lk)/dashboard/releases/new/page.tsx`

- [ ] **Step 1: Create `app/(lk)/dashboard/catalog/page.tsx`**

```tsx
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/dashboard/SectionHeader';
import { releases, type ReleaseStatus } from '@/lib/mock/releases';
import { Plus } from 'lucide-react';

const statusLabel: Record<ReleaseStatus, { label: string; tone: 'success' | 'warning' | 'neutral' }> = {
  published: { label: 'Опубликован',  tone: 'success' },
  review:    { label: 'На модерации', tone: 'warning' },
  draft:     { label: 'Черновик',     tone: 'neutral' }
};

export default function CatalogPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Каталог</h1>
        <Link href="/dashboard/releases/new">
          <Button>
            <Plus className="h-4 w-4" />
            Новый релиз
          </Button>
        </Link>
      </div>
      <Card className="p-0 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-text-2">
              <th className="px-5 py-3 font-normal">Релиз</th>
              <th className="px-5 py-3 font-normal">Артист</th>
              <th className="px-5 py-3 font-normal">ISRC</th>
              <th className="px-5 py-3 font-normal">Дата</th>
              <th className="px-5 py-3 font-normal">Статус</th>
            </tr>
          </thead>
          <tbody>
            {releases.map((r) => {
              const s = statusLabel[r.status];
              return (
                <tr key={r.id} className="border-t border-border">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`h-9 w-9 rounded-md bg-gradient-to-br ${r.coverGradient}`} />
                      <div className="font-medium">{r.title}</div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-text-1">{r.artist}</td>
                  <td className="px-5 py-3 text-text-2">{r.isrc}</td>
                  <td className="px-5 py-3 text-text-1">
                    {new Date(r.releasedAt).toLocaleDateString('ru-RU')}
                  </td>
                  <td className="px-5 py-3">
                    <Badge tone={s.tone}>{s.label}</Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
```

- [ ] **Step 2: Create `app/(lk)/dashboard/finance/page.tsx`**

```tsx
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { balanceRub, operations } from '@/lib/mock/finance';
import { ArrowDownRight, ArrowUpRight, Wallet } from 'lucide-react';

const fmt = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });

const kindLabel = {
  payout:  { label: 'Вывод',     tone: 'neutral' as const },
  royalty: { label: 'Роялти',    tone: 'accent'  as const },
  fee:     { label: 'Комиссия',  tone: 'warning' as const }
};

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Финансы</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-text-2 text-sm">
              <Wallet className="h-4 w-4" /> Доступно к выводу
            </div>
            <div className="mt-2 text-3xl font-semibold">{fmt.format(balanceRub)}</div>
            <div className="mt-1 text-xs text-text-2">Обновлено сегодня</div>
          </div>
          <Button>Вывести</Button>
        </Card>
        <Card>
          <div className="text-text-2 text-sm">Доход за месяц</div>
          <div className="mt-2 text-2xl font-semibold">{fmt.format(77_570)}</div>
          <div className="mt-1 text-xs text-emerald-400">+12% к прошлому</div>
        </Card>
      </div>
      <Card className="p-0 overflow-hidden">
        <div className="px-5 py-4 border-b border-border font-medium">История операций</div>
        <table className="w-full text-sm">
          <tbody>
            {operations.map((o) => {
              const k = kindLabel[o.kind];
              const positive = o.amountRub > 0;
              return (
                <tr key={o.id} className="border-t border-border">
                  <td className="px-5 py-3 text-text-2 w-32">
                    {new Date(o.date).toLocaleDateString('ru-RU')}
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      {positive
                        ? <ArrowDownRight className="h-4 w-4 text-emerald-400" />
                        : <ArrowUpRight   className="h-4 w-4 text-text-2" />}
                      <span>{o.source}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <Badge tone={k.tone}>{k.label}</Badge>
                  </td>
                  <td className="px-5 py-3 text-right font-medium">
                    {positive ? '+' : ''}{fmt.format(o.amountRub)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
```

- [ ] **Step 3: Create `app/(lk)/dashboard/profile/page.tsx`**

```tsx
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';

export default function ProfilePage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-semibold">Профиль</h1>
      <Card>
        <div className="flex items-center gap-4">
          <Avatar name="Стёпа С" className="h-14 w-14 text-base" />
          <div>
            <div className="text-lg font-medium">Стёпа Сичкар</div>
            <div className="text-sm text-text-2">stepan.sichkar@example.com</div>
          </div>
          <Button variant="secondary" className="ml-auto">Сменить фото</Button>
        </div>
      </Card>
      <Card>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Имя"><Input defaultValue="Стёпа" /></Field>
          <Field label="Фамилия"><Input defaultValue="Сичкар" /></Field>
          <Field label="Email"><Input defaultValue="stepan.sichkar@example.com" /></Field>
          <Field label="Телефон"><Input placeholder="+7 ..." /></Field>
          <Field label="Сценический псевдоним"><Input defaultValue="NEONOVA" /></Field>
          <Field label="Страна"><Input defaultValue="Россия" /></Field>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="ghost">Отмена</Button>
          <Button>Сохранить</Button>
        </div>
      </Card>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wider text-text-2">{label}</span>
      {children}
    </label>
  );
}
```

- [ ] **Step 4: Create `app/(lk)/dashboard/releases/new/page.tsx`**

```tsx
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Check, Upload, FileMusic, Image as ImageIcon } from 'lucide-react';

const steps = [
  { n: 1, title: 'Метаданные',  done: false, active: true },
  { n: 2, title: 'Аудио',       done: false, active: false },
  { n: 3, title: 'Обложка',     done: false, active: false },
  { n: 4, title: 'Дистрибуция', done: false, active: false }
];

export default function NewReleasePage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-2xl font-semibold">Новый релиз</h1>

      <ol className="grid grid-cols-4 gap-2">
        {steps.map((s) => (
          <li
            key={s.n}
            className={`rounded-xl border p-3 text-sm ${
              s.active ? 'border-accent bg-accent/10' : 'border-border bg-bg-1'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-bg-2 text-xs">
                {s.done ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : s.n}
              </span>
              <span className={s.active ? 'text-text-0' : 'text-text-1'}>{s.title}</span>
            </div>
          </li>
        ))}
      </ol>

      <Card>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Название релиза"><Input placeholder="Например: Северное сияние" /></Field>
          <Field label="Артист"><Input placeholder="NEONOVA" /></Field>
          <Field label="Лейбл"><Input placeholder="MusicHub Records" /></Field>
          <Field label="Жанр"><Input placeholder="Pop / Indie / Electronic" /></Field>
          <Field label="Язык"><Input defaultValue="Русский" /></Field>
          <Field label="Дата релиза"><Input type="date" /></Field>
        </div>
      </Card>

      <Card>
        <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-bg-2">
            <FileMusic className="h-6 w-6 text-text-1" />
          </div>
          <div>
            <div className="font-medium">Загрузите аудиофайл</div>
            <div className="mt-1 text-xs text-text-2">WAV или FLAC, до 100 МБ. Минимум 16 бит / 44.1 кГц.</div>
          </div>
          <Button variant="secondary"><Upload className="h-4 w-4" /> Выбрать файл</Button>
        </div>
      </Card>

      <Card>
        <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-bg-2">
            <ImageIcon className="h-6 w-6 text-text-1" />
          </div>
          <div>
            <div className="font-medium">Обложка релиза</div>
            <div className="mt-1 text-xs text-text-2">JPG или PNG, минимум 3000×3000, до 10 МБ.</div>
          </div>
          <Button variant="secondary"><Upload className="h-4 w-4" /> Загрузить обложку</Button>
        </div>
      </Card>

      <div className="flex justify-end gap-2">
        <Button variant="ghost">Сохранить черновик</Button>
        <Button>Далее</Button>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wider text-text-2">{label}</span>
      {children}
    </label>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add app/\(lk\)/dashboard/catalog app/\(lk\)/dashboard/finance app/\(lk\)/dashboard/profile app/\(lk\)/dashboard/releases
git commit -m "feat: catalog, finance, profile, new-release pages"
```

---

## Task 8: Coming-soon stub for remaining dashboard routes

**Files:**
- Create: `app/(lk)/dashboard/[...stub]/page.tsx`, `components/dashboard/ComingSoon.tsx`

- [ ] **Step 1: Create `components/dashboard/ComingSoon.tsx`**

```tsx
import { Card } from '@/components/ui/Card';
import { Construction } from 'lucide-react';

export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <Card className="flex flex-col items-center justify-center gap-3 py-16 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-bg-2">
          <Construction className="h-7 w-7 text-accent" />
        </div>
        <div className="text-lg font-medium">Скоро здесь будет интересно</div>
        <p className="max-w-md text-sm text-text-2">
          Этот раздел в активной разработке. Подпишитесь на обновления — мы дадим знать первыми.
        </p>
      </Card>
    </div>
  );
}
```

- [ ] **Step 2: Create `app/(lk)/dashboard/[...stub]/page.tsx`**

```tsx
import { ComingSoon } from '@/components/dashboard/ComingSoon';
import { navGroups } from '@/lib/nav';

export default function StubPage({ params }: { params: { stub: string[] } }) {
  const href = '/dashboard/' + params.stub.join('/');
  const item = navGroups.flatMap((g) => g.items).find((i) => i.href === href);
  return <ComingSoon title={item?.label ?? 'Раздел'} />;
}
```

- [ ] **Step 3: Commit**

```bash
git add components/dashboard/ComingSoon.tsx app/\(lk\)/dashboard/\[...stub\]
git commit -m "feat: coming-soon stub for unimplemented dashboard routes"
```

---

## Task 9: Login page

**Files:**
- Create: `app/login/page.tsx`

- [ ] **Step 1: Create `app/login/page.tsx`**

```tsx
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Music2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    router.push('/dashboard');
  }

  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="w-full max-w-sm">
        <Link href="/" className="mb-6 flex items-center justify-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2">
            <Music2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold">MusicHub</span>
        </Link>
        <div className="rounded-2xl border border-border bg-bg-1 p-6">
          <h1 className="text-xl font-semibold">Вход в кабинет</h1>
          <p className="mt-1 text-sm text-text-2">Войдите, чтобы управлять релизами</p>
          <form className="mt-6 space-y-3" onSubmit={onSubmit}>
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-wider text-text-2">Email</span>
              <Input type="email" placeholder="you@example.com" required />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-wider text-text-2">Пароль</span>
              <Input type="password" placeholder="••••••••" required />
            </label>
            <Button className="w-full" type="submit">Войти</Button>
          </form>
          <div className="mt-4 text-center text-xs text-text-2">
            Нет аккаунта? <Link href="/" className="text-accent">Зарегистрироваться</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/login
git commit -m "feat: fake login page"
```

---

## Task 10: Landing page

**Files:**
- Create: `components/landing/LandingHeader.tsx`, `components/landing/Hero.tsx`, `components/landing/Features.tsx`, `components/landing/Pricing.tsx`, `components/landing/CTA.tsx`, `components/landing/LandingFooter.tsx`, replace `app/page.tsx`

- [ ] **Step 1: Create `components/landing/LandingHeader.tsx`**

```tsx
import Link from 'next/link';
import { Music2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg-0/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2">
            <Music2 className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold">MusicHub</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-text-1">
          <a href="#features">Возможности</a>
          <a href="#pricing">Тарифы</a>
          <a href="#cta">Начать</a>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Link href="/login"><Button variant="ghost" size="sm">Войти</Button></Link>
          <Link href="/login"><Button size="sm">Попробовать</Button></Link>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Create `components/landing/Hero.tsx`**

```tsx
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 [background-image:radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.18),transparent_50%)]" />
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-bg-1 px-3 py-1 text-xs text-text-1">
          Музыкальная дистрибьюция нового поколения
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
          Твоя музыка — <span className="bg-gradient-to-r from-accent to-fuchsia-500 bg-clip-text text-transparent">на всех площадках</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-text-1">
          Загрузи трек один раз — и он окажется в Spotify, Apple Music, VK и Яндекс Музыке.
          Получай роялти, аналитику и инструменты продвижения в одном кабинете.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/login">
            <Button size="lg">Начать бесплатно <ArrowRight className="h-4 w-4" /></Button>
          </Link>
          <Link href="#features">
            <Button size="lg" variant="secondary">Узнать больше</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `components/landing/Features.tsx`**

```tsx
import { Card } from '@/components/ui/Card';
import { Globe2, Wallet, Sparkles, BarChart3, Shield, Headphones } from 'lucide-react';

const features = [
  { icon: Globe2,    title: 'Все площадки',     text: 'Spotify, Apple Music, VK, Яндекс, Boom, Deezer — 150+ DSP.' },
  { icon: Wallet,    title: '100% роялти',      text: 'Без скрытых комиссий. Выводи на карту в один клик.' },
  { icon: Sparkles,  title: 'AI-инструменты',   text: 'Генерация обложек, мастеринг, идеи для постов.' },
  { icon: BarChart3, title: 'Живая аналитика',  text: 'Стримы, аудитория и страны — обновляются ежедневно.' },
  { icon: Shield,    title: 'Защита прав',      text: 'ISRC, Content ID и помощь с тайпсквоттингом.' },
  { icon: Headphones,title: 'Поддержка 24/7',   text: 'Менеджеры на связи, отвечаем за минуты.' }
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Всё нужное в одном месте</h2>
        <p className="mt-3 text-text-1">Платформа, которая закрывает путь от идеи до релиза.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <Card key={f.title} className="space-y-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div className="font-medium">{f.title}</div>
              <div className="text-sm text-text-2">{f.text}</div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create `components/landing/Pricing.tsx`**

```tsx
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Старт',
    price: '0 ₽',
    period: 'навсегда',
    features: ['1 артист', '2 релиза в год', 'Базовая аналитика', '85% роялти'],
    cta: 'Начать',
    highlighted: false
  },
  {
    name: 'Pro',
    price: '490 ₽',
    period: '/мес',
    features: ['До 3 артистов', 'Безлимит релизов', 'Полная аналитика', '100% роялти', 'AI-инструменты'],
    cta: 'Выбрать Pro',
    highlighted: true
  },
  {
    name: 'Label',
    price: 'Договорная',
    period: '',
    features: ['Безлимит артистов', 'Личный менеджер', 'White-label кабинет', 'API-интеграции'],
    cta: 'Связаться',
    highlighted: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Простые тарифы</h2>
        <p className="mt-3 text-text-1">Платишь только за то, что используешь.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <Card
            key={p.name}
            className={p.highlighted ? 'border-accent ring-1 ring-accent/40' : ''}
          >
            <div className="flex items-baseline justify-between">
              <div className="text-lg font-semibold">{p.name}</div>
              {p.highlighted && (
                <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] uppercase text-accent">
                  Популярно
                </span>
              )}
            </div>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-3xl font-semibold">{p.price}</span>
              <span className="text-sm text-text-2">{p.period}</span>
            </div>
            <ul className="mt-5 space-y-2 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link href="/login" className="mt-6 block">
              <Button className="w-full" variant={p.highlighted ? 'primary' : 'secondary'}>
                {p.cta}
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Create `components/landing/CTA.tsx`**

```tsx
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-700 p-10 text-center md:p-16">
        <h2 className="text-3xl md:text-4xl font-semibold">Готов выпустить первый трек?</h2>
        <p className="mx-auto mt-3 max-w-lg text-white/80">
          Регистрация бесплатна. Первый релиз можно опубликовать уже сегодня.
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/login">
            <Button size="lg" className="bg-white text-violet-800 hover:bg-white/90">
              Создать аккаунт
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Create `components/landing/LandingFooter.tsx`**

```tsx
export function LandingFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-text-2 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} MusicHub. Все права защищены.</div>
        <div className="flex gap-5">
          <a href="#">Условия</a>
          <a href="#">Конфиденциальность</a>
          <a href="#">Контакты</a>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 7: Replace `app/page.tsx`**

```tsx
import { LandingHeader } from '@/components/landing/LandingHeader';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Pricing } from '@/components/landing/Pricing';
import { CTA } from '@/components/landing/CTA';
import { LandingFooter } from '@/components/landing/LandingFooter';

export default function HomePage() {
  return (
    <>
      <LandingHeader />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <LandingFooter />
    </>
  );
}
```

- [ ] **Step 8: Commit**

```bash
git add components/landing app/page.tsx
git commit -m "feat: landing page (hero, features, pricing, cta, footer)"
```

---

## Task 11: README and final verification

**Files:**
- Create: `README.md`

- [ ] **Step 1: Create `README.md`**

```markdown
# MusicHub

White-label прототип платформы музыкальной дистрибьюции. Лендинг + личный кабинет на Next.js 14 со статичными моковыми данными.

## Запуск

```bash
pnpm install
pnpm dev
```

Открыть http://localhost:3000

## Структура

- `/` — лендинг
- `/login` — фейковая авторизация (любой ввод → редирект в ЛК)
- `/dashboard` — главная ЛК
- `/dashboard/catalog`, `/dashboard/finance`, `/dashboard/profile`, `/dashboard/releases/new` — рабочие страницы
- остальные пункты сайдбара — заглушки «Coming soon»

## Стек

Next.js 14 (App Router) · TypeScript · Tailwind CSS · lucide-react

## Скрипты

- `pnpm dev` — dev-сервер
- `pnpm build` — продакшен-сборка
- `pnpm lint` — ESLint
```

- [ ] **Step 2: Final verification**

```bash
pnpm build
pnpm lint
```

Expected: build succeeds with no errors; lint clean.

- [ ] **Step 3: Smoke-check каждой страницы**

```bash
pnpm dev &
sleep 5
for p in / /login /dashboard /dashboard/catalog /dashboard/finance /dashboard/profile /dashboard/releases/new /dashboard/messages; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000$p")
  echo "$p -> $code"
done
kill %1 2>/dev/null
```

Expected: все возвращают 200.

- [ ] **Step 4: Commit and push**

```bash
git add README.md
git commit -m "docs: add README"
git push origin main
```

Expected: push succeeds to `github.com:mkoty/music-distribution.git`.
