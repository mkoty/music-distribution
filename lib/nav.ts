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
