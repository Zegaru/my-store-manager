import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import type {ReactElement, ReactNode} from 'react';
import type {AppProps} from 'next/app';
import type {NextPage} from 'next';

import {ProvideAuth} from '../src/contexts/Auth';
import Layout from '../src/components/layouts/Layout';

import '../styles/globals.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

export default function App({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return (
    <QueryClientProvider client={queryClient}>
      <ProvideAuth>{getLayout(<Component {...pageProps} />)}</ProvideAuth>

      <div
        id="toast-container"
        className="fixed bottom-0 left-0 right-0 z-50 sm:bottom-auto sm:left-auto sm:top-20 sm:right-4"
      />
    </QueryClientProvider>
  );
}
