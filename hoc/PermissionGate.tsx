import React from 'react';
import { useSelector } from 'react-redux';
import { SCOPES } from '@/common/constants';
import { isAuthenticated } from '@/utils/helpers';
import { selectIsLoggedUser } from '@/store/slices/auth';

type PropsTypes = {
  scope: typeof SCOPES[keyof typeof SCOPES];
  children: React.ReactElement;
};
const PermissionGate = ({ children, scope }: PropsTypes) => {
  const isUserLogged = useSelector(selectIsLoggedUser);

  if (scope === SCOPES.LOGGED_USER && typeof window !== 'undefined') {
    return isAuthenticated() && isUserLogged ? children : null;
  }
  return <></>;
};
export default PermissionGate;
