import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import View from './view';
import { useAuth } from '@/hooks';
import { ROUTES } from '@/common/constants';
import { ComponentPropTypes } from './types';
import { selectRouterAnimationCompleted } from '@/store/slices/base';

const Container: React.FC<ComponentPropTypes> = ({ children }) => {
  const [isSigningOut, setIsSigningOut] = useState<boolean>(false);
  const router = useRouter();
  const { signOut } = useAuth();
  const hasBeenFinishedRouterAnimation = useSelector(selectRouterAnimationCompleted);

  const logout = useCallback(async () => {
    await router.push(ROUTES.home);
    setIsSigningOut(true);
  }, []);

  useEffect(() => {
    if (hasBeenFinishedRouterAnimation && isSigningOut) {
      signOut();
      setIsSigningOut(false);
    }
  }, [hasBeenFinishedRouterAnimation, isSigningOut]);

  return <View logout={logout}>{children}</View>;
};
Container.displayName = 'LogoutContainer';
export default React.memo(Container);
