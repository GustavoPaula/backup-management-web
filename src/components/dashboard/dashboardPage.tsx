import { AlertTriangle, Calendar, Server, Users } from 'lucide-react';

import { Header } from './header';
import { RecentFailures } from './recent-failures';
import { Sidebar } from './sidebar';
import { StatCard } from './stat-card';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-foreground mb-2">
              Dashboard
            </h1>
            <p className="text-muted-foreground">
              Visão geral do sistema de backup
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            <StatCard
              title="Total Clientes"
              value="0"
              icon={<Users className="w-6 h-6" />}
              iconBgColor="bg-blue-100 dark:bg-blue-950"
              iconColor="text-blue-600 dark:text-blue-400"
            />
            <StatCard
              title="Dispositivos"
              value="0"
              icon={<Server className="w-6 h-6" />}
              iconBgColor="bg-green-100 dark:bg-green-950"
              iconColor="text-green-600 dark:text-green-400"
            />
            <StatCard
              title="Backups Hoje"
              value="0"
              icon={<Calendar className="w-6 h-6" />}
              iconBgColor="bg-yellow-100 dark:bg-yellow-950"
              iconColor="text-yellow-600 dark:text-yellow-400"
            />
            <StatCard
              title="Falhas"
              value="0"
              icon={<AlertTriangle className="w-6 h-6" />}
              iconBgColor="bg-red-100 dark:bg-red-950"
              iconColor="text-red-600 dark:text-red-400"
            />
          </div>

          <RecentFailures />
        </main>
      </div>
    </div>
  );
}
