import { Header } from '../dashboard/header';
import { Sidebar } from '../dashboard/sidebar';
import { BackupPlansTable } from './backupPlanTable';

export function BackupPlansPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-6 lg:p-8">
          <BackupPlansTable />
        </main>
      </div>
    </div>
  );
}
