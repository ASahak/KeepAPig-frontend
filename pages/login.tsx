import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import withAuth from '@/hoc/withAuth';
const LoginPage =  dynamic(() => import('@/components/Entry/Login'));

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <LoginPage />
    </>
  );
};
export const getServerSideProps = withAuth(
  (): any => {
    return { props: {} };
  },
  { auth: false }
);
export default Login;
