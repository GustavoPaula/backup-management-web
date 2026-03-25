import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppLayout } from './app/layout/AppLayout';
import { ROUTES, ROUTE_SEGMENTS } from './app/paths/routes';
import { Private } from './features/auth/components/Private';
import { Public } from './features/auth/components/Public';

const HomePage = lazy(async () => await import('./features/auth/pages/Home'));
const DashboardPage = lazy(
  async () => await import('./features/dashboard/pages/Dashboard'),
);
const UsersPage = lazy(async () => await import('./features/users/pages/Users'));
const CustomersPage = lazy(
  async () => await import('./features/customers/pages/Customers'),
);
const UsersRegistration = lazy(
  async () => await import('./features/users/pages/UsersCreate'),
);
const DevicesPage = lazy(
  async () => await import('./features/devices/pages/Devices'),
);
const BackupPlansPage = lazy(
  async () => await import('./features/backup-plans/pages/BackupPlans'),
);

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.public.home} element={<Public />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={ROUTES.app.root} element={<Private />}>
          <Route element={<AppLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path={ROUTE_SEGMENTS.users} element={<UsersPage />} />
            <Route
              path={ROUTE_SEGMENTS.usersCreate}
              element={<UsersRegistration />}
            />
            <Route path={ROUTE_SEGMENTS.customers} element={<CustomersPage />} />
            <Route path={ROUTE_SEGMENTS.devices} element={<DevicesPage />} />
            <Route
              path={ROUTE_SEGMENTS.backupPlans}
              element={<BackupPlansPage />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
