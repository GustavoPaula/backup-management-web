import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
        <Route path="/" element={<Public />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/app" element={<Private />}>
          <Route index element={<DashboardPage />} />
        </Route>
        <Route path="/app/users" element={<Private />}>
          <Route index element={<UsersPage />} />
        </Route>
        <Route path="/app/users/create" element={<Private />}>
          <Route index element={<UsersRegistration />} />
        </Route>
        <Route path="/app/customers" element={<Private />}>
          <Route index element={<CustomersPage />} />
        </Route>
        <Route path="/app/devices" element={<Private />}>
          <Route index element={<DevicesPage />} />
        </Route>
        <Route path="/app/backup-plans" element={<Private />}>
          <Route index element={<BackupPlansPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
