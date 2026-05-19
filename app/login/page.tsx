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
