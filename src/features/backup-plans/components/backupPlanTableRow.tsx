'use client';

import { Badge } from '../../../components/ui/badge';
import { EntityNameCell } from '../../../components/shared/listing/EntityNameCell';
import { RowActions } from '../../../components/shared/listing/RowActions';

interface BackupPlan {
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

export function BackupPlansTableRow({ backupPlan }: { backupPlan: BackupPlan }) {
  return (
    <tr className="transition-colors hover:bg-muted/30">
      <td className="whitespace-nowrap px-6 py-4">
        <EntityNameCell name={backupPlan.name} avatar={backupPlan.avatar} />
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <span className="text-sm text-foreground">{backupPlan.name}</span>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <span className="text-sm text-foreground">{backupPlan.email}</span>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <Badge variant="secondary" className={backupPlan.permissionColor}>
          {backupPlan.role}
        </Badge>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <span className="text-sm text-muted-foreground">{backupPlan.createdAt}</span>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <span className="text-sm text-muted-foreground">{backupPlan.updatedAt}</span>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <RowActions
          editLabel="Editar plano de backup"
          deleteLabel="Deletar plano de backup"
        />
      </td>
    </tr>
  );
}
