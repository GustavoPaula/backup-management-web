import { type FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';

export const Public: FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/app" replace /> : <Outlet />;
};

