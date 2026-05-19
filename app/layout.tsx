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
