import type { NextPage } from 'next';
import Head from 'next/head';
import MySettingsPage from '@/components/Pages/MySettingsPage';
import withAuth from '@/hoc/withAuth';

const MySettings: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Settings</title>
      </Head>
      <MySettingsPage />
    </>
  );
};
export const getServerSideProps = withAuth(
  (): any => {
    return { props: {} };
  },
  { auth: true }
);
export default MySettings;
