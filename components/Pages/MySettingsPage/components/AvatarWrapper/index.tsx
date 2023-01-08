import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/store/slices/auth';
import View from './view';

const Container = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return <View />;
};
Container.displayName = 'MySettingAvatarWrapperContainer';
export default React.memo(Container);
