'use client';

import { Button } from '../../ui/button';

interface DataTablePaginationProps {
  summary?: string;
  pages?: string[];
  currentPage?: string;
}

export function DataTablePagination({
  summary = 'Mostrando 1 a 4 de 12 resultados',
  pages = ['1', '2', '3'],
  currentPage = '1',
}: DataTablePaginationProps) {
  return (
    <div className="flex items-center justify-between border-t border-border px-6 py-4">
      <p className="text-sm text-muted-foreground">{summary}</p>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          Anterior
        </Button>
        {pages.map((page) => (
          <Button
            key={page}
            variant={page === currentPage ? 'default' : 'outline'}
            size="sm"
            className={page === currentPage ? 'bg-blue-700 hover:bg-blue-800' : undefined}
          >
            {page}
          </Button>
        ))}
        <Button variant="outline" size="sm">
          Proximo
        </Button>
      </div>
    </div>
  );
}
