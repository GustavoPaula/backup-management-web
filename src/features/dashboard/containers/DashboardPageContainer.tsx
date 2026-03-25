import { AlertTriangle, Calendar, Server, Users } from 'lucide-react';

import {
  DashboardPageView,
  type DashboardStat,
} from '../views/DashboardPageView';

const stats: DashboardStat[] = [
  {
    title: 'Total Clientes',
    value: '0',
    icon: <Users className="h-6 w-6" />,
    iconBgColor: 'bg-blue-100 dark:bg-blue-950',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    title: 'Dispositivos',
    value: '0',
    icon: <Server className="h-6 w-6" />,
    iconBgColor: 'bg-green-100 dark:bg-green-950',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    title: 'Backups Hoje',
    value: '0',
    icon: <Calendar className="h-6 w-6" />,
    iconBgColor: 'bg-yellow-100 dark:bg-yellow-950',
    iconColor: 'text-yellow-600 dark:text-yellow-400',
  },
  {
    title: 'Falhas',
    value: '0',
    icon: <AlertTriangle className="h-6 w-6" />,
    iconBgColor: 'bg-red-100 dark:bg-red-950',
    iconColor: 'text-red-600 dark:text-red-400',
  },
];

export function DashboardPageContainer() {
  return (
    <DashboardPageView
      title="Dashboard"
      description="Visao geral do sistema de backup"
      stats={stats}
    />
  );
}
