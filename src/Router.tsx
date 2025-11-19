import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Private } from './components/auth/Private';
import { Public } from './components/auth/Public';

const HomePage = lazy(async () => await import('./pages/Home'));
const DashboardPage = lazy(async () => await import('./pages/Dashboard'));

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
      </Routes>
    </BrowserRouter>
  );
};
