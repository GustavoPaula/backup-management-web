import { useCallback, useContext } from 'react';

import { AuthContext, type SignIn } from '../contexts/auth';

export const useAuth = () => {
  const { isAuthenticated, signIn, signOut, decodedToken } =
    useContext(AuthContext);
  return {
    isAuthenticated,
    signIn: useCallback<SignIn>(
      async (props) => {
        if (signIn == null) return;
        await signIn(props);
      },
      [signIn],
    ),
    signOut: useCallback(() => {
      if (signOut == null) return;
      signOut();
    }, [signOut]),
    decodedToken,
  };
};
