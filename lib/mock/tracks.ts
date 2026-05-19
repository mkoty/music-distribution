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
