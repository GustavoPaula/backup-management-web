import { type FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const Public: FC = () => {
  const isAuthenticated = false;

  return isAuthenticated ? <Navigate to="/app" replace /> : <Outlet />;
};
