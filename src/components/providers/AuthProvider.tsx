import { FC, ReactNode, useCallback, useMemo, useState } from 'react';

import { jwtDecode } from 'jwt-decode';

import {
  AuthContext,
  CustomJwtPayload,
  type AuthContextProps,
  type SignIn,
} from '../../contexts/auth';
import { API_PATHS } from '../../services/paths/api';
import { LoginResponse } from '../../types';

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [decodedToken, setDecodedToken] =
    useState<AuthContextProps['decodedToken']>(null);

  const signIn = useCallback<SignIn>(async (props) => {
    try {
      const response = await fetch(API_PATHS.auth.login, {
        method: 'POST',
        body: JSON.stringify(props),
      });
      if (!response.ok) throw new Error('Credenciais invalidas');
      const data = (await response.json()) as LoginResponse;
      const decodedToken = jwtDecode<CustomJwtPayload>(data.data);
      setDecodedToken(decodedToken);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
    }
  }, []);
  const signOut = useCallback(() => {
    setIsAuthenticated(false);
  }, []);
  const value = useMemo(
    () => ({ isAuthenticated, signIn, decodedToken, signOut }),
    [isAuthenticated, signIn, signOut, decodedToken],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
