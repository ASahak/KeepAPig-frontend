import type { NextPage } from 'next';
import Head from 'next/head';
import LoginPage from '@/components/Entry/Login';
import withAuth from '@/hoc/withAuth';

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sign In</title>
      </Head>
      <LoginPage />
    </div>
  );
};
export const getServerSideProps = withAuth(
  (): any => {
    return { props: {} };
  },
  { auth: false }
);
export default Login;
