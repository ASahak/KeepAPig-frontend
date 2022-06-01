import React from 'react';
import withAuth from '@hoc/withAuth';
import withLayout from '@hoc/withLayout';
import LoginView from '@components/Entry/Login';

const Login = () => {
    return (
        <LoginView />
    )
}
export default withLayout('nude')(withAuth(false)(Login));
