import React from 'react';
import View from './view';
import { useSelector } from 'react-redux';
import { selectIsLoggedUser } from '@/store/slices/auth';

const Container = () => {
  const isUserLogged = useSelector(selectIsLoggedUser);

  return <View isReady={isUserLogged} />;
};
Container.displayName = 'MySettingsContainer';
export default React.memo(Container);
