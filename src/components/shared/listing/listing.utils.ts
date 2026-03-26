export function getEntityInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export interface PaginationItem {
  label: string;
  isCurrent: boolean;
}

export function buildPaginationItems(
  pages: string[],
  currentPage: string,
): PaginationItem[] {
  return pages.map((page) => ({
    label: page,
    isCurrent: page === currentPage,
  }));
}
