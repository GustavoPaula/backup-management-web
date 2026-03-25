'use client';

import { Edit2, Trash2 } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';

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
  const initials = user.name
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
              src={user.avatar || '/placeholder.svg'}
              alt={user.name}
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground">
            {user.name}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-foreground">{user.username}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-foreground">{user.email}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Badge variant="secondary" className={user.permissionColor}>
          {user.role}
        </Badge>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-muted-foreground">{user.createdAt}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-muted-foreground">{user.updatedAt}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-primary hover:text-primary hover:bg-primary/10"
          >
            <Edit2 className="h-4 w-4" />
            <span className="sr-only">Editar usuário</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Deletar usuário</span>
          </Button>
        </div>
      </td>
    </tr>
  );
}



