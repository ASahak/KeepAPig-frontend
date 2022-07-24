import React, { useState, userRef } from 'react';
import withAuth from '@hoc/withAuth';
import withLayout from '@hoc/withLayout';
import RegisterView from '@components/Entry/Register';

const Register = () => {
    return <RegisterView />;
};
export default withLayout('nude')(withAuth(false)(Register));
