'use client';

import { Edit2, Trash2 } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';

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

export function BackupPlansTableRow({
  backupPlan,
}: {
  backupPlan: BackupPlan;
}) {
  const initials = backupPlan.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2);

  return (
    <tr className="hover:bg-muted/30 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src={backupPlan.avatar || '/placeholder.svg'}
              alt={backupPlan.name}
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground">
            {backupPlan.name}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-foreground">{backupPlan.name}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-foreground">{backupPlan.email}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Badge variant="secondary" className={backupPlan.permissionColor}>
          {backupPlan.role}
        </Badge>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-muted-foreground">
          {backupPlan.createdAt}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-muted-foreground">
          {backupPlan.updatedAt}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-primary hover:text-primary hover:bg-primary/10"
          >
            <Edit2 className="h-4 w-4" />
            <span className="sr-only">Editar plano de backup</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Deletar plano de backup</span>
          </Button>
        </div>
      </td>
    </tr>
  );
}



