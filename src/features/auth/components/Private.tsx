import { type FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

//import { useAuth } from '../../hooks/useAuth';

export const Private: FC = () => {
  //const { isAuthenticated } = useAuth();
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};
