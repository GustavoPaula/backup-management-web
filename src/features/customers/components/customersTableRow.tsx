'use client';

import { EntityNameCell } from '../../../components/shared/listing/EntityNameCell';
import { RowActions } from '../../../components/shared/listing/RowActions';

interface Customer {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  avatar: string;
}

export function CustomersTableRow({ customer }: { customer: Customer }) {
  return (
    <tr className="transition-colors hover:bg-muted/30">
      <td className="whitespace-nowrap px-6 py-4">
        <EntityNameCell name={customer.name} avatar={customer.avatar} />
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <span className="text-sm text-muted-foreground">{customer.createdAt}</span>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <span className="text-sm text-muted-foreground">{customer.updatedAt}</span>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <RowActions
          editLabel="Editar cliente"
          deleteLabel="Deletar cliente"
        />
      </td>
    </tr>
  );
}
