import { AlertTriangle, Calendar, Server, Users } from 'lucide-react';

import { RecentFailures } from './recent-failures';
import { StatCard } from './stat-card';

export default function DashboardPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-semibold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Visao geral do sistema de backup</p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <StatCard
          title="Total Clientes"
          value="0"
          icon={<Users className="h-6 w-6" />}
          iconBgColor="bg-blue-100 dark:bg-blue-950"
          iconColor="text-blue-600 dark:text-blue-400"
        />
        <StatCard
          title="Dispositivos"
          value="0"
          icon={<Server className="h-6 w-6" />}
          iconBgColor="bg-green-100 dark:bg-green-950"
          iconColor="text-green-600 dark:text-green-400"
        />
        <StatCard
          title="Backups Hoje"
          value="0"
          icon={<Calendar className="h-6 w-6" />}
          iconBgColor="bg-yellow-100 dark:bg-yellow-950"
          iconColor="text-yellow-600 dark:text-yellow-400"
        />
        <StatCard
          title="Falhas"
          value="0"
          icon={<AlertTriangle className="h-6 w-6" />}
          iconBgColor="bg-red-100 dark:bg-red-950"
          iconColor="text-red-600 dark:text-red-400"
        />
      </div>

      <RecentFailures />
    </>
  );
}
