import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import View from './view';
import { useAuth } from '@/hooks';
import { ROUTES } from '@/common/constants';
import { ComponentPropTypes } from './types';

const Container: React.FC<ComponentPropTypes> = ({ children }) => {
  const router = useRouter();
  const { signOut } = useAuth();

  const logout = useCallback(async () => {
    signOut();
    await router.push(ROUTES.home);
  }, []);

  return <View logout={logout}>{children}</View>;
};
Container.displayName = 'LogoutContainer';
export default React.memo(Container);
