'use client';

import { Link, useLocation } from 'react-router-dom';

import {
  LayoutDashboard,
  Users,
  Building2,
  Server,
  Calendar,
  AlertTriangle,
} from 'lucide-react';

import { cn } from '../../../lib/utils';

const menuItems = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/',
  },
  {
    label: 'Usuários',
    icon: Users,
    href: '/usuarios',
  },
  {
    label: 'Clientes',
    icon: Building2,
    href: '/clientes',
  },
  {
    label: 'Dispositivos',
    icon: Server,
    href: '/dispositivos',
  },
  {
    label: 'Planos de Backup',
    icon: Calendar,
    href: '/planos',
  },
  {
    label: 'Falhas de Backup',
    icon: AlertTriangle,
    href: '/falhas',
  },
];

export function Sidebar() {
  const pathname = useLocation();

  return (
    <aside className="w-64 border-r border-border bg-sidebar hidden lg:block">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium',
                isActive
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                  : 'text-sidebar-foreground hover:bg-blue-500 hover:text-sidebar-accent-foreground',
              )}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

