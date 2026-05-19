export function LandingFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-text-2 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} MusicHub. Все права защищены.</div>
        <div className="flex gap-5">
          <a href="#">Условия</a>
          <a href="#">Конфиденциальность</a>
          <a href="#">Контакты</a>
        </div>
      </div>
    </footer>
  );
}
