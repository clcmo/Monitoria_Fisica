import { Aula, AULAS_MOCK } from '../data/aulas';

// Quando o backend existir, defina VITE_AULAS_API_URL no arquivo .env
// Ex.: VITE_AULAS_API_URL=https://seu-backend.com/api/aulas
const API_URL = import.meta.env.VITE_AULAS_API_URL as string | undefined;

/**
 * Busca a lista de aulas.
 * - Sem VITE_AULAS_API_URL definida: retorna os dados de src/data/aulas.ts (mock),
 *   simulando uma pequena latência para já deixar a tela pronta para dados assíncronos.
 * - Com VITE_AULAS_API_URL definida: busca de fato na API real.
 */
export async function listarAulas(): Promise<Aula[]> {
  if (!API_URL) {
    return new Promise((resolve) => setTimeout(() => resolve(AULAS_MOCK), 300));
  }

  const resposta = await fetch(API_URL);
  if (!resposta.ok) {
    throw new Error(`Erro ao buscar aulas: ${resposta.status}`);
  }
  return resposta.json();
}