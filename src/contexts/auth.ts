import { createContext } from 'react';

import { JwtPayload } from 'jwt-decode';

import { Noop } from '../types';

export interface CustomJwtPayload extends JwtPayload {
  user_id?: string;
  role?: string;
}

export type SignIn = (props: {
  username: string;
  password: string;
}) => Promise<void>;

export interface AuthContextProps {
  isAuthenticated: boolean;
  signIn: SignIn | null;
  signOut: Noop | null;
  decodedToken: CustomJwtPayload | null;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  signIn: null,
  signOut: null,
  decodedToken: null,
});

AuthContext.displayName = 'AuthContext';
