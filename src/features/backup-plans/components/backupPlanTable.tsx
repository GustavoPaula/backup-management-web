import { Search, Plus } from 'lucide-react';

import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { BackupPlansPagination } from './backupPlanPagination';
import { BackupPlansTableRow } from './backupPlanTableRow';

const backupPlans = [
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

export function BackupPlansTable() {
  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-border gap-4">
          <h2 className="text-lg font-semibold text-foreground whitespace-nowrap">
            Planos de Backup Cadastrados
          </h2>

          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar planos de backup..."
                className="pl-10"
              />
            </div>
            <Button className="gap-2 bg-blue-700 hover:bg-blue-800 whitespace-nowrap">
              <Plus className="h-4 w-4" />
              Adicionar Plano de Backup
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Plano de Backup
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Tamanho Backup
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Dia da Semana
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Horário do dia
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
              {backupPlans.map((backupPlan) => (
                <BackupPlansTableRow
                  key={backupPlan.id}
                  backupPlan={backupPlan}
                />
              ))}
            </tbody>
          </table>
        </div>

        <BackupPlansPagination />
      </div>
    </div>
  );
}


