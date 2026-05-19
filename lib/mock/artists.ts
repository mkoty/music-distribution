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
