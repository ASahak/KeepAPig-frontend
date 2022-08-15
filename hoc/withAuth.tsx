import React from 'react';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode';
import { Cookie } from '@/services';
import { PAGE_ROUTES } from '@/utils/constants';

// eslint-disable-next-line react/display-name
const withAuth = (auth: boolean) => (Component: React.FC) => (props: any) => {
  const token = Cookie.getToken;
  const isAuthenticated = !!token;
  const router = useRouter();

  if (auth) {
    if (!isAuthenticated) {
      return router.push(PAGE_ROUTES.signIn);
    } else {
      const userTokenData = jwt_decode(token);
      console.log(userTokenData); // todo get user data
    }
  } else {
    if (isAuthenticated && Component.displayName !== 'Home') {
      return router.push(PAGE_ROUTES.home);
    }
  }

  return <Component {...props} />;
};
export default withAuth;
