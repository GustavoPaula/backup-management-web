import { describe, expect, it } from 'vitest';

import { buildPaginationItems, getEntityInitials } from './listing.utils';

describe('listing.utils', () => {
  it('gera iniciais em maiusculo para nomes compostos', () => {
    expect(getEntityInitials('Maria Silva')).toBe('MS');
  });

  it('ignora espacos extras ao gerar iniciais', () => {
    expect(getEntityInitials('  Joao   Pedro  ')).toBe('JP');
  });

  it('limita as iniciais a dois caracteres', () => {
    expect(getEntityInitials('Ana Beatriz Souza')).toBe('AB');
  });

  it('marca corretamente a pagina atual na paginacao', () => {
    expect(buildPaginationItems(['1', '2', '3'], '2')).toEqual([
      { label: '1', isCurrent: false },
      { label: '2', isCurrent: true },
      { label: '3', isCurrent: false },
    ]);
  });
});
