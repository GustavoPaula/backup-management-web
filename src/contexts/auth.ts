import { createContext } from 'react';

import { DecodeResult } from 'paseto';

import { Noop } from '../types';

export type SignIn = (props: {
  username: string;
  password: string;
}) => Promise<void>;

export interface AuthContextProps {
  isAuthenticated: boolean;
  signIn: SignIn | null;
  signOut: Noop | null;
  decodedToken: DecodeResult | null;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  signIn: null,
  signOut: null,
  decodedToken: null,
});

AuthContext.displayName = 'AuthContext';
