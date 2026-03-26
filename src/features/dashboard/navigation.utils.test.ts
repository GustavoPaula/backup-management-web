import { describe, expect, it } from 'vitest';

import { isSidebarItemActive } from './navigation.utils';

describe('isSidebarItemActive', () => {
  it('retorna true quando o pathname corresponde exatamente ao item', () => {
    expect(isSidebarItemActive('/app/users', '/app/users')).toBe(true);
  });

  it('retorna true para rotas filhas do item', () => {
    expect(isSidebarItemActive('/app/users/create', '/app/users')).toBe(true);
  });

  it('retorna false quando a raiz nao corresponde a uma rota filha', () => {
    expect(isSidebarItemActive('/app/users', '/app')).toBe(false);
  });

  it('retorna false para rotas diferentes', () => {
    expect(isSidebarItemActive('/app/customers', '/app/users')).toBe(false);
  });
});
