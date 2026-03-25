'use client';

import { Badge } from '../../../components/ui/badge';
import { EntityNameCell } from '../../../components/shared/listing/EntityNameCell';
import { RowActions } from '../../../components/shared/listing/RowActions';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
  permissionColor: string;
  createdAt: string;
  updatedAt: string;
  avatar: string;
}

export function UsersTableRow({ user }: { user: User }) {
  return (
    <tr className="transition-colors hover:bg-muted/30">
      <td className="whitespace-nowrap px-6 py-4">
        <EntityNameCell name={user.name} avatar={user.avatar} />
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <span className="text-sm text-foreground">{user.username}</span>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <span className="text-sm text-foreground">{user.email}</span>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <Badge variant="secondary" className={user.permissionColor}>
          {user.role}
        </Badge>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <span className="text-sm text-muted-foreground">{user.createdAt}</span>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <span className="text-sm text-muted-foreground">{user.updatedAt}</span>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <RowActions
          editLabel="Editar usuario"
          deleteLabel="Deletar usuario"
        />
      </td>
    </tr>
  );
}
