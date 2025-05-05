// Script para gerar automaticamente as páginas no TinaCMS usando faker
import dotenv from 'dotenv';
import { client } from '../tina/__generated__/client';
import { generatePages } from '../src/utils/faker';

dotenv.config();

// Número de páginas para gerar
const PAGE_COUNT = 10; // Ajuste para 1000 quando estiver pronto

async function main() {
  try {
    console.log(`Iniciando a geração de ${PAGE_COUNT} páginas para cada template...`);
    
    await generatePages(client, PAGE_COUNT);
    
    console.log('Páginas geradas com sucesso!');
  } catch (error) {
    console.error('Erro ao gerar páginas:', error);
    process.exit(1);
  }
}

main();