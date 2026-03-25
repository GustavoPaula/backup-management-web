'use client';

import { Link, useLocation } from 'react-router-dom';

import { Building2, Calendar, LayoutDashboard, Server, Users } from 'lucide-react';

import { ROUTES } from '../../../app/paths/routes';
import { cn } from '../../../lib/utils';

const menuItems = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    to: ROUTES.app.root,
  },
  {
    label: 'Usuarios',
    icon: Users,
    to: ROUTES.app.users,
  },
  {
    label: 'Clientes',
    icon: Building2,
    to: ROUTES.app.customers,
  },
  {
    label: 'Dispositivos',
    icon: Server,
    to: ROUTES.app.devices,
  },
  {
    label: 'Planos de Backup',
    icon: Calendar,
    to: ROUTES.app.backupPlans,
  },
];

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="hidden w-64 border-r border-border bg-sidebar lg:block">
      <nav className="space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.to ||
            (item.to !== ROUTES.app.root && pathname.startsWith(`${item.to}/`));

          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                'flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                  : 'text-sidebar-foreground hover:bg-blue-500 hover:text-sidebar-accent-foreground',
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
