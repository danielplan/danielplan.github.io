import '@styles/base.scss';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Navigation from '@components/layout/Navigation';
import FakeCursor from '@components/atoms/FakeCursor';
import Footer from '@components/layout/Footer';
import {useEffect, useState} from 'react';

function MyApp({Component, pageProps}: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(prefersDarkMode.matches);
  }, []);
  return (
    <>
      <Head>
        {darkMode ? (
          <link rel="icon" href="/img/logo-white.svg" />
        ) : (
          <link rel="icon" href="/img/logo.svg" />
        )}
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
