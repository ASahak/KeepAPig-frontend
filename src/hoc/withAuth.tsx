import React from 'react';
import { Cookie } from '@services';

const withAuth = (auth: boolean) => (Component: React.FC) => (props: any) => {
    const isAuthenticated = !!Cookie.getToken;

    if (auth) {
        if (!isAuthenticated) {
            window.location.href = '/login';
            return null;
        }
    } else {
        if (isAuthenticated) {
            window.location.href = '/';
            return null;
        }
    }

    return <Component {...props} />;
}
export default withAuth;
