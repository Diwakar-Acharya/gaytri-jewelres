import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://diwakaracharya.github.io',
  base: '/gaytri-jewelres',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
