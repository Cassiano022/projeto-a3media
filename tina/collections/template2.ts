import type { Collection } from "tinacms";

// Definição da coleção para o Template 2 (glucosecontrolguide)
const template2: Collection = {
  name: "template2",
  label: "Template 2 - Glucose Control Guide",
  path: "content/template2",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/paginatemplate2/${document._sys.filename}`;
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
      name: "headline",
      label: "Headline Principal",
    },
    {
      type: "rich-text",
      name: "content",
      label: "Conteúdo Principal",
      isBody: true,
    },
    {
      type: "image",
      name: "productImage",
      label: "Imagem do Produto",
    },
    {
      type: "string",
      name: "price",
      label: "Preço",
    },
    {
      type: "string",
      name: "discountPrice",
      label: "Preço com Desconto",
    },
    {
      type: "string",
      name: "ctaButtonText",
      label: "Texto do Botão CTA",
    },
    {
      type: "object",
      name: "benefits",
      label: "Benefícios",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Título do Benefício",
        },
        {
          type: "string",
          name: "description",
          label: "Descrição do Benefício",
        },
        {
          type: "image",
          name: "icon",
          label: "Ícone",
        },
      ],
    },
    // Adicione mais campos conforme necessário para mapear todos os elementos da página original
  ],
};

export default template2;