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
