import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://crayfish-clumsy.github.io',
  base: '/business_card_website',
  trailingSlash: 'ignore',
  // Старые адреса кейсов, чтобы ранее отправленные ссылки не ломались
  redirects: {
    '/cases/self-service-kiosk': '/business_card_website/cases/self-checkout/',
  },
});
