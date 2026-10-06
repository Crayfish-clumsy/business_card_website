# Сайт-визитка команды

Astro, статическая сборка. Стиль — стекло из `../Стекло + лого`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # готовый сайт в dist/
```

- **Название и контакты** — `src/config.ts`.
- **Кейсы** — `src/content/cases/*.md`. Новый кейс = новый файл: скопируйте любой
  существующий и поменяйте frontmatter (метрики, сложности, стек) и текст.
  `visual` — иллюстрация карточки: `web | kiosk | vpn | scheduler`.
- **Стили** — `src/styles/global.css` (переменные тем вверху файла).
