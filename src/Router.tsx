import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Private } from './components/auth/Private';
import { Public } from './components/auth/Public';

const HomePage = lazy(async () => await import('./pages/Home'));
const DashboardPage = lazy(async () => await import('./pages/Dashboard'));
const UsersPage = lazy(async () => await import('./pages/Users'));
const CustomersPage = lazy(async () => await import('./pages/Customers'));

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
        <Route path="/app/customers" element={<Private />}>
          <Route index element={<CustomersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
