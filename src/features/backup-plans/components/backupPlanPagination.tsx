'use client';

import { Button } from '../../../components/ui/button';

export function BackupPlansPagination() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-t border-border">
      <p className="text-sm text-muted-foreground">
        Mostrando 1 a 4 de 12 resultados
      </p>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          Anterior
        </Button>
        <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          Próximo
        </Button>
      </div>
    </div>
  );
}

