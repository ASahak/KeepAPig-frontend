import type { NextPage } from 'next';
import Head from 'next/head';
import LoginPage from '@/components/Entry/Login';

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

export default Login;
