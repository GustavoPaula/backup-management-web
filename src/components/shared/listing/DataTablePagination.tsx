'use client';

import { buildPaginationItems } from './listing.utils';
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
  const paginationItems = buildPaginationItems(pages, currentPage);

  return (
    <div className="flex items-center justify-between border-t border-border px-6 py-4">
      <p className="text-sm text-muted-foreground">{summary}</p>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          Anterior
        </Button>
        {paginationItems.map((page) => (
          <Button
            key={page.label}
            variant={page.isCurrent ? 'default' : 'outline'}
            size="sm"
            className={page.isCurrent ? 'bg-blue-700 hover:bg-blue-800' : undefined}
          >
            {page.label}
          </Button>
        ))}
        <Button variant="outline" size="sm">
          Proximo
        </Button>
      </div>
    </div>
  );
}
