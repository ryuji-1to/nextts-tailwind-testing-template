import { Layout } from '@/components/Layout';
import { HomePage } from '@/components/pages/HomePage';

import type { NextPageWithLayout } from './_app.page';

const Home: NextPageWithLayout = () => {
  return <HomePage />;
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
