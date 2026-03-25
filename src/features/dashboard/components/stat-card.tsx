import { cn } from '../../../lib/utils';
import { Card } from '../../../components/ui/card';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
}

export function StatCard({
  title,
  value,
  icon,
  iconBgColor,
  iconColor,
}: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-2">{title}</p>
          <p className="text-4xl font-bold text-foreground">{value}</p>
        </div>
        <div className={cn('p-3 rounded-lg', iconBgColor, iconColor)}>
          {icon}
        </div>
      </div>
    </Card>
  );
}


