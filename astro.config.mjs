import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    preact(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['gsap', 'lenis', 'split-type'],
    },
  },
});
