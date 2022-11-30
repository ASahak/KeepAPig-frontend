import React from 'react';
import NudeLayout from '@/pages/_layouts/nude';
import GuestLayout from '@/pages/_layouts/guest';
import UserLayout from '@/pages/_layouts/user';
import { isAuthenticated } from '@/utils/helpers';

const withLayout =
  (name: string, layoutProps: { [key: string]: unknown } = {}) =>
  (Component: React.FC) =>
  // eslint-disable-next-line react/display-name
  (props: { [key: string]: unknown }) => {
    const Layout = name === 'nude' ? NudeLayout : name === 'user' && isAuthenticated() ? UserLayout : GuestLayout;

    return (
      <Layout {...layoutProps}>
        <Component {...props} />
      </Layout>
    );
  };
export default withLayout;
