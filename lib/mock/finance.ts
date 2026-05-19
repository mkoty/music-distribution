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
