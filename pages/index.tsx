import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import withAuth from '@/hoc/withAuth';
const HomePage = dynamic(() => import('@/components/Pages/Home'));

const Home: NextPage<{}> = () => {
  return (
    <>
      <Head>
        <title>Keep a pig</title>
      </Head>
      <HomePage />
    </>
  );
};
Home.displayName = 'Home';
export const getServerSideProps = withAuth(
  (): any => {
    return { props: {} };
  },
  { auth: false }
);
export default Home;
