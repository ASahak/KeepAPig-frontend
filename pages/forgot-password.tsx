import type { NextPage } from 'next';
import Head from 'next/head';
import ForgotPasswordPage from '@/components/Entry/ForgotPassword';
import withAuth from '@/hoc/withAuth';

const ForgotPassword: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Forgot password</title>
      </Head>
      <ForgotPasswordPage />
    </div>
  );
};
export const getServerSideProps = withAuth(
  (): any => {
    return { props: {} };
  },
  { auth: false }
);
export default ForgotPassword;
