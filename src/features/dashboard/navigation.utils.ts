export function isSidebarItemActive(pathname: string, itemPath: string) {
  return (
    pathname === itemPath ||
    (itemPath !== '/app' && pathname.startsWith(`${itemPath}/`))
  );
}
