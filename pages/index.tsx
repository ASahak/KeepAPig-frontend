import type { NextPage } from 'next';
import Head from 'next/head';
import withAuth from '@/hoc/withAuth';
import HomePage from '@/components/Pages/Home';

const Home: NextPage<{}> = () => {
  return (
    <div>
      <Head>
        <title>Keep a pig</title>
      </Head>
      <HomePage />
    </div>
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
