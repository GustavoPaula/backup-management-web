'use client';

import { Edit2, Trash2 } from 'lucide-react';

import { Button } from '../../ui/button';

interface RowActionsProps {
  editLabel: string;
  deleteLabel: string;
}

export function RowActions({ editLabel, deleteLabel }: RowActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-primary hover:bg-primary/10 hover:text-primary"
      >
        <Edit2 className="h-4 w-4" />
        <span className="sr-only">{editLabel}</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
      >
        <Trash2 className="h-4 w-4" />
        <span className="sr-only">{deleteLabel}</span>
      </Button>
    </div>
  );
}
