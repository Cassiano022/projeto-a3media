import type { Collection } from "tinacms";

// Definição da coleção para o Template 1 (getflowempower)
const template1: Collection = {
  name: "template1",
  label: "Template 1 - Flow Empower",
  path: "content/template1",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/paginatemplate1/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Título da Página",
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtítulo",
    },
    {
      type: "rich-text",
      name: "content",
      label: "Conteúdo Principal",
      isBody: true,
    },
    {
      type: "image",
      name: "mainImage",
      label: "Imagem Principal",
    },
    {
      type: "string",
      name: "ctaButtonText",
      label: "Texto do Botão CTA",
    },
    {
      type: "string",
      name: "ctaButtonUrl",
      label: "URL do Botão CTA",
    },
    {
      type: "object",
      name: "testimonials",
      label: "Depoimentos",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Nome da Pessoa",
        },
        {
          type: "string",
          name: "text",
          label: "Texto do Depoimento",
        },
        {
          type: "image",
          name: "avatar",
          label: "Avatar",
        },
      ],
    },
    // Adicione mais campos conforme necessário para mapear todos os elementos da página original
  ],
};

export default template1;