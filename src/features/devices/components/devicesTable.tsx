import { useState } from 'react';

import { Plus, Search } from 'lucide-react';

import { DeviceModal } from './DeviceModal';
import { DataTablePagination } from '../../../components/shared/listing/DataTablePagination';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { DevicesTableRow } from './devicesTableRow';

const devices = [
  {
    id: 1,
    name: 'DISPOSITIVO TESTE',
    createdAt: '21/11/2025',
    updatedAt: '21/11/2025',
    avatar: '/professional-woman.png',
  },
];

export function DevicesTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex items-center justify-between gap-4 border-b border-border p-6">
          <h2 className="whitespace-nowrap text-lg font-semibold text-foreground">
            Dispositivos Cadastrados
          </h2>

          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar dispositivos..."
                className="pl-10"
              />
            </div>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="gap-2 whitespace-nowrap bg-blue-700 hover:bg-blue-800"
            >
              <Plus className="h-4 w-4" />
              Adicionar dispositivo
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Dispositivo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Data Criacao
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Data Atualizacao
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Acoes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {devices.map((device) => (
                <DevicesTableRow key={device.id} device={device} />
              ))}
            </tbody>
          </table>
        </div>

        <DataTablePagination />
        <DeviceModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </div>
  );
}
