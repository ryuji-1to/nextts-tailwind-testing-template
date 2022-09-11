import '@/styles/globals.css';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import type { ReactElement, ReactNode } from 'react';
import { useEffect } from 'react';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  const router = useRouter();
  const focusMain = () => {
    const main = document.getElementById('main');
    main?.focus();
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', focusMain);
    return () => router.events.off('routeChangeComplete', focusMain);
  });

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
