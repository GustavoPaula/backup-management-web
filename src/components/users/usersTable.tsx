'use client';

import { useState } from 'react';

import { Search, Plus } from 'lucide-react';

import { UserModal } from '../modal/user-modal';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { UsersPagination } from './usersPagination';
import { UsersTableRow } from './usersTableRow';

const users = [
  {
    id: 1,
    name: 'Administrador',
    username: 'admin',
    email: 'admin@admin.com',
    role: 'admin',
    permissionColor: 'bg-emerald-100 text-emerald-700',
    createdAt: '15/03/2024',
    updatedAt: '20/11/2024',
    avatar: '/src/public/images/logo-wt.jpeg',
  },
];

export function UsersTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-border gap-4">
          <h2 className="text-lg font-semibold text-foreground whitespace-nowrap">
            Usuários Cadastrados
          </h2>

          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar usuários..."
                className="pl-10"
              />
            </div>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="gap-2 bg-blue-700 hover:bg-blue-800 whitespace-nowrap"
            >
              <Plus className="h-4 w-4" />
              Adicionar Usuário
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Nome Completo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Usuário
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  E-mail
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Permissão
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Data Criação
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Data Atualização
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {users.map((user) => (
                <UsersTableRow key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>

        <UsersPagination />
        {/* User Registration Modal */}
        <UserModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </div>
  );
}
