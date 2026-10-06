// Единственное место, где задаются название команды и контакты.
export const SITE = {
  name: 'NORDLINE',
  tagline: 'Команда продуктовой разработки',
  description:
    'Проектируем и разрабатываем веб-сервисы, десктоп-приложения, киоски и сетевые продукты — от первого созвона до поддержки в проде.',
  telegram: 'https://t.me/your_team',
  telegramLabel: '@your_team',
  email: 'hello@example.com',
  city: 'Россия · удалённо',
};

// Ссылка с учётом base из astro.config (сайт живёт в подпапке на GitHub Pages).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => `${BASE}${path}`;
