import React from 'react';
import View from './view';
import { useSelector } from 'react-redux';
import { selectIsLoggedUser } from '@/store/slices/auth';
import { selectSettings } from '@/store/slices/settings';

const Container = () => {
  const isUserLogged = useSelector(selectIsLoggedUser);
  const { isSaving } = useSelector(selectSettings);

  return <View isReady={isUserLogged} isSaving={isSaving} />;
};
Container.displayName = 'MySettingsContainer';
export default React.memo(Container);
