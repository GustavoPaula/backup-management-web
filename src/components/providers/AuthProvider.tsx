import { FC, ReactNode, useCallback, useMemo, useState } from 'react';

import {
  AuthContext,
  type AuthContextProps,
  type SignIn,
} from '../../contexts/auth';
import { pasetoDecode } from '../../lib/pasetoDecode';
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
      const response = await fetch(import.meta.env.VITE_API_URL + '/login', {
        method: 'POST',
        body: JSON.stringify(props),
      });
      if (!response.ok) throw new Error('Credenciais inválidas');
      const data = (await response.json()) as LoginResponse;
      setDecodedToken(pasetoDecode(data.token));
      setIsAuthenticated(true);
    } catch (error) {
      // eslint-disable-next-line no-console
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
