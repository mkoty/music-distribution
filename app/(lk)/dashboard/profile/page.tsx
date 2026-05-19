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
            <div className="text-lg font-medium">Стёпа Сичкарь</div>
            <div className="text-sm text-text-2">stepan.sichkar@example.com</div>
          </div>
          <Button variant="secondary" className="ml-auto">Сменить фото</Button>
        </div>
      </Card>
      <Card>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Имя"><Input defaultValue="Стёпа" /></Field>
          <Field label="Фамилия"><Input defaultValue="Сичкарь" /></Field>
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
