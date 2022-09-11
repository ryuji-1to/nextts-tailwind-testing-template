import Head from 'next/head';
import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title?: string;
};

export const Layout: FC<Props> = ({ title = 'helloworld', children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
    </>
  );
};
