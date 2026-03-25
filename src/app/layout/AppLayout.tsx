import { Outlet } from 'react-router-dom';

import { Header } from '../../features/dashboard/components/header';
import { Sidebar } from '../../features/dashboard/components/sidebar';

export function AppLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <main className="flex-1 p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
