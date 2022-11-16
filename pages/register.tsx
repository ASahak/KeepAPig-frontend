import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import withAuth from '@/hoc/withAuth';
const RegisterPage = dynamic(() => import('@/components/Entry/Register'));

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Registration</title>
      </Head>
      <RegisterPage />
    </>
  );
};
export const getServerSideProps = withAuth(
  (): any => {
    return { props: {} };
  },
  { auth: false }
);
export default Register;
