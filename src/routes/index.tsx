import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@pages/home';
import Login from '@pages/login';
import Register from '@pages/register';
import { PAGE_ROUTES } from './constants';

type TRoute = {
    path: string;
    component: Function,
}
const routes: TRoute[] = [
    {
        path: PAGE_ROUTES.home,
        component: Home,
    },
    {
        path: PAGE_ROUTES.signIn,
        component: Login,
    },
    {
        path: PAGE_ROUTES.register,
        component: Register,
    }
];

const AppRoutes: React.FC<{}> = () => {
    const routeComponents = routes.map((item: TRoute) => {
        const Component = item.component;
        return <Route path={item.path} key={item.path} element={<Component />} />
    });

    return (
        <Routes>
            {routeComponents}
        </Routes>
    )
}
export default AppRoutes;
