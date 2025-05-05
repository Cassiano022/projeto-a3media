import { defineConfig } from 'astro/config';
import tina from "@tinacms/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tina({
      clientId: process.env.TINA_CLIENT_ID,
      token: process.env.TINA_TOKEN,
      branch: process.env.TINA_BRANCH || 'main',
    }),
  ],
  // Habilita o modo SSR para renderizar as páginas dinamicamente
  output: 'server',
});