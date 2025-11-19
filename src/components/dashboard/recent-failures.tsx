import { AlertCircle } from 'lucide-react';

import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

const failures = [
  {
    id: 0,
    title: '',
    description: '',
    status: '',
  },
];

export function RecentFailures() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-4">
        Falhas Recentes
      </h2>

      <Card className="divide-y divide-border">
        {failures.map((failure) => (
          <div
            key={failure.id}
            className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 dark:bg-red-950">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  {failure.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {failure.description}
                </p>
              </div>
            </div>

            <Badge
              variant="destructive"
              className="bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-950 dark:text-red-400"
            >
              {failure.status}
            </Badge>
          </div>
        ))}
      </Card>
    </div>
  );
}
