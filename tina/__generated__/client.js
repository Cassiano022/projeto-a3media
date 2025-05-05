import { createClient } from "tinacms/dist/client";
import { queries } from "./types";

/**
 * Este é um arquivo placeholder que será substituído pelo cliente gerado automaticamente
 * quando você executa o CLI do TinaCMS.
 * 
 * No entanto, podemos configurar um cliente básico para uso inicial.
 */

export const client = createClient({
  url: process.env.NEXT_PUBLIC_TINA_CONTENT_URL || "http://localhost:4321/admin",
  token: process.env.TINA_TOKEN,
  queries,
  // Esta configuração será preenchida automaticamente quando o TinaCMS gerar o arquivo
});

/**
 * IMPORTANTE: Este arquivo será substituído pelo CLI do TinaCMS
 * Para gerar o cliente completo, execute:
 * npx tinacms dev
 * ou
 * npx tinacms build
 */