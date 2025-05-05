import { faker } from '@faker-js/faker';

// Função para gerar conteúdo fake para cada página
export function generateFakeContent() {
  return {
    title: faker.commerce.productName(),
    subtitle: faker.company.catchPhrase(),
    content: faker.lorem.paragraphs(5),
    ctaButtonText: faker.word.words(3),
    testimonials: Array(3).fill(null).map(() => ({
      name: faker.person.fullName(),
      text: faker.lorem.paragraph(),
    })),
  };
}

// Função específica para template2
export function generateFakeContentTemplate2() {
  return {
    title: faker.commerce.productName(),
    headline: faker.company.catchPhrase(),
    content: faker.lorem.paragraphs(5),
    price: faker.commerce.price({ min: 99, max: 199 }),
    discountPrice: faker.commerce.price({ min: 49, max: 99 }),
    ctaButtonText: `${faker.word.adjective()} ${faker.word.noun()} Now!`,
    benefits: Array(4).fill(null).map(() => ({
      title: faker.commerce.productAdjective(),
      description: faker.lorem.sentence(),
    })),
  };
}

// Gera páginas para ambos os templates
export async function generatePages(client, count) {
  for (let i = 1; i <= count; i++) {
    // Template 1
    await client.queries.createTemplate1({
      relativePath: `page-${i}.mdx`,
      ...generateFakeContent()
    });
    
    // Template 2
    await client.queries.createTemplate2({
      relativePath: `page-${i}.mdx`,
      ...generateFakeContentTemplate2()
    });
  }
}