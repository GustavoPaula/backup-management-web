'use client';

import { EntityNameCell } from '../../../components/shared/listing/EntityNameCell';
import { RowActions } from '../../../components/shared/listing/RowActions';

interface Device {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  avatar: string;
}

export function DevicesTableRow({ device }: { device: Device }) {
  return (
    <tr className="transition-colors hover:bg-muted/30">
      <td className="whitespace-nowrap px-6 py-4">
        <EntityNameCell name={device.name} avatar={device.avatar} />
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <span className="text-sm text-muted-foreground">{device.createdAt}</span>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <span className="text-sm text-muted-foreground">{device.updatedAt}</span>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <RowActions
          editLabel="Editar dispositivo"
          deleteLabel="Deletar dispositivo"
        />
      </td>
    </tr>
  );
}
