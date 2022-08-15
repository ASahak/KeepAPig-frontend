import type { NextPage } from 'next';
import Head from 'next/head';
import RegisterPage from '@/components/Entry/Register';

const Register: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Registration</title>
      </Head>
      <RegisterPage />
    </div>
  );
};

export default Register;
