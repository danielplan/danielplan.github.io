import '@styles/base.scss';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Navigation from '@components/layout/Navigation';
import FakeCursor from '@components/atoms/FakeCursor';
import Footer from '@components/layout/Footer';

export const BASE_URL = 'https://danielplan.github.io/';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      <FakeCursor />
    </>
  );
}

export default MyApp;
