# Сайт-визитка команды

Astro, статическая сборка. Шрифты — Onest и JetBrains Mono, стиль — плоский, на тонких линиях (без стекла).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # готовый сайт в dist/
```

Деплой: каждый push в `main` публикует сайт на GitHub Pages
(https://crayfish-clumsy.github.io/business_card_website/) через `.github/workflows/deploy.yml`.
При смене адреса поправьте `site` и `base` в `astro.config.mjs`.


- **Название и контакты** — `src/config.ts`.
- **Кейсы** — `src/content/cases/*.md`. Новый кейс = новый файл: скопируйте любой
  существующий и поменяйте frontmatter (метрики, сложности, стек) и текст.
  `visual` — иллюстрация карточки: `web | kiosk | vpn | scheduler`.
- **Стили** — `src/styles/global.css` (переменные тем вверху файла).
