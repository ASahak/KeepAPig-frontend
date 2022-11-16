import { GetServerSideProps } from 'next';
import { ROUTES } from '@/common/constants';

const withAuth = (gssp: GetServerSideProps, { auth }: { auth: boolean }) => {
  return async (context: any) => {
    const { req, resolvedUrl } = context;
    const token = req.cookies.token;
    const isAuthenticated = !!token;

    if (auth) {
      if (!isAuthenticated) {
        return {
          redirect: {
            destination: ROUTES.signIn,
            statusCode: 302
          }
        };
      }
    } else {
      if (isAuthenticated && resolvedUrl !== ROUTES.home) {
        return {
          redirect: {
            destination: ROUTES.home,
            statusCode: 302
          }
        };
      }
    }

    return await gssp(context);
  };
};
export default withAuth;
