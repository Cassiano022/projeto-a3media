import { defineConfig } from 'astro/config';
import tinaPlugin from "@tinacms/astro";
import { tina } from 'astro-tina';
import { createClient } from 'tinacms/dist/client';
import { queries } from './tina/__generated__/types.js';
import dotenv from 'dotenv';
dotenv.config();    
// Importa o cliente TinaCMS
export const client = createClient({
  url: process.env.NEXT_PUBLIC_TINA_CONTENT_URL || "http://localhost:4001/graphql",
  token: process.env.TINA_TOKEN,
  queries,
});




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