import { Button } from '@/components/ui/Button';
import { FileText, Mail, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-2xl border border-border bg-bg-1 p-8 md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold">Готов взяться за проект</h2>
            <p className="mt-3 text-text-1">
              Это рабочий прототип под ваш заказ. Личного сайта пока нет — вот резюме на hh.ru.
              Или просто напишите в Telegram / на почту.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://spb.hh.ru/resume/52934805ff07a638140039ed1f466d35396471"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <FileText className="h-4 w-4" /> Резюме на hh.ru
              </Button>
            </a>
            <a href="https://t.me/stepan_sichkar" target="_blank" rel="noreferrer">
              <Button variant="secondary">
                <Send className="h-4 w-4" /> Telegram
              </Button>
            </a>
            <a href="mailto:mkoty@yandex.ru">
              <Button variant="secondary">
                <Mail className="h-4 w-4" /> Написать письмо
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
