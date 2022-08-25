import type { NextPage } from 'next';
import Head from 'next/head';
import RegisterPage from '@/components/Entry/Register';
import withAuth from '@/hoc/withAuth';

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
export const getServerSideProps = withAuth(
  (): any => {
    return { props: {} };
  },
  { auth: false }
);
export default Register;
