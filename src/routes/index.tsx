import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@pages/home';
import Login from '@pages/login';
import Register from '@pages/register';
import { PAGE_ROUTES } from './constants';

const AppRoutes: React.FC<{}> = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path={PAGE_ROUTES.signIn} element={<Login />} />
            <Route path={PAGE_ROUTES.register} element={<Register />} />
        </Routes>
    );
};
export default AppRoutes;
