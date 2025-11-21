'use client';

import { Edit2, Trash2 } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';

interface Customer {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  avatar: string;
}

export function CustomersTableRow({ customer }: { customer: Customer }) {
  const initials = customer.name
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
              src={customer.avatar || '/placeholder.svg'}
              alt={customer.name}
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground">
            {customer.name}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-muted-foreground">
          {customer.createdAt}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-muted-foreground">
          {customer.updatedAt}
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
            <span className="sr-only">Editar cliente</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Deletar cliente</span>
          </Button>
        </div>
      </td>
    </tr>
  );
}
