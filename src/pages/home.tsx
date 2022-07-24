import React from 'react';
import CanvasView from '@components/Home/CanvasView';
import withLayout from '@hoc/withLayout';
import withAuth from '@hoc/withAuth';

const Home = () => {
    return (
        <>
            <CanvasView />
        </>
    );
};
export default withLayout('user')(withAuth(false)(Home));
