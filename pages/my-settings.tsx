import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { withAuth } from '@/hoc';
const MySettingsPage = dynamic(() => import('@/components/Pages/MySettingsPage'));

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
