import React from 'react';
import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { Cookie } from '@services';
import { PAGE_ROUTES } from '@routes/constants';

const withAuth = (auth: boolean) => (Component: React.FC) => (props: any) => {
    const token = Cookie.getToken;
    const isAuthenticated = !!token;

    if (auth) {
        if (!isAuthenticated) {
            return <Navigate to={PAGE_ROUTES.signIn} />;
        } else {
            const userTokenData = jwt_decode(token);
            console.log(userTokenData); // todo get user data
        }
    } else {
        if (isAuthenticated) {
            return <Navigate to={PAGE_ROUTES.home} />;
        }
    }

    return <Component {...props} />;
};
export default withAuth;
