import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import View from './view';
import { ROUTES } from '@/common/constants';

const Container = () => {
  const router = useRouter();

  const goTo = useCallback(async () => {
    await router.push(ROUTES.mySettings);
  }, []);

  return <View goTo={goTo} />;
};
Container.displayName = 'HamburgerMenuContainer';
export default React.memo(Container);
