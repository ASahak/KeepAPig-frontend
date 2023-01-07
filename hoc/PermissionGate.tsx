import React from 'react';
import { SCOPES } from '@/common/constants';
import { isAuthenticated } from '@/utils/helpers';

type PropsTypes = {
  scope: typeof SCOPES[keyof typeof SCOPES];
  children: React.ReactElement;
};
const PermissionGate = ({ children, scope }: PropsTypes) => {
  if (scope === SCOPES.LOGGED_USER && typeof window !== 'undefined') {
    return isAuthenticated() ? children : null;
  }
  return <></>;
};
export default PermissionGate;
