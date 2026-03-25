import { type ReactNode } from 'react';

import { RecentFailures } from '../components/recent-failures';
import { StatCard } from '../components/stat-card';

export interface DashboardStat {
  title: string;
  value: string;
  icon: ReactNode;
  iconBgColor: string;
  iconColor: string;
}

interface DashboardPageViewProps {
  title: string;
  description: string;
  stats: DashboardStat[];
}

export function DashboardPageView({
  title,
  description,
  stats,
}: DashboardPageViewProps) {
  return (
    <>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-semibold text-foreground">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            iconBgColor={stat.iconBgColor}
            iconColor={stat.iconColor}
          />
        ))}
      </div>

      <RecentFailures />
    </>
  );
}
