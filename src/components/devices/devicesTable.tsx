import { useState } from 'react';

import { Search, Plus } from 'lucide-react';

import { DeviceModal } from '../modal/device-modal';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { DevicesPagination } from './devicesPagination';
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
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-border gap-4">
          <h2 className="text-lg font-semibold text-foreground whitespace-nowrap">
            Dispositivos Cadastrados
          </h2>

          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar dispositivos..."
                className="pl-10"
              />
            </div>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="gap-2 bg-blue-700 hover:bg-blue-800 whitespace-nowrap"
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
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Dispositivo
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
              {devices.map((device) => (
                <DevicesTableRow key={device.id} device={device} />
              ))}
            </tbody>
          </table>
        </div>

        <DevicesPagination />
        <DeviceModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </div>
  );
}
