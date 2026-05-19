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
