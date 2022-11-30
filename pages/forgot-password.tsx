import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { withAuth } from '@/hoc';
const ForgotPasswordPage = dynamic(() => import('@/components/Entry/ForgotPassword'));

const ForgotPassword: NextPage = () => {
  return (
    <>
      <Head>
        <title>Forgot password</title>
      </Head>
      <ForgotPasswordPage />
    </>
  );
};
export const getServerSideProps = withAuth(
  (): any => {
    return { props: {} };
  },
  { auth: false }
);
export default ForgotPassword;
