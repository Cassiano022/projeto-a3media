import { defineConfig } from "tinacms";
import template1 from "./collections/template1";
import template2 from "./collections/template2";

// Configuração do TinaCMS
export default defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  schema: {
    collections: [template1, template2],
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
});