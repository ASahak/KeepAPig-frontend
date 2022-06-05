import React from 'react';
import NudeLayout from '@pages/_layouts/nude';
import GuestLayout from '@pages/_layouts/guest';
import UserLayout from '@pages/_layouts/user';
import { Cookie } from '@services';

const withLayout = (name: string, layoutProps: object = {}) => (Component: React.FC) => (props: any) => {
    const isAuthenticated = !!Cookie.getToken;

    const Layout = name === 'nude'
        ? NudeLayout
        : name === 'user' && isAuthenticated
            ? UserLayout
            : GuestLayout;

    return <Layout {...layoutProps}>
        <Component {...props} />
    </Layout>
}
export default withLayout;
