import { Layout } from '@/components/Layout';

import type { NextPageWithLayout } from './_app.page';

const About: NextPageWithLayout = () => {
  return <div>about</div>;
};

About.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default About;
