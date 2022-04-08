import "@styles/base.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navigation from "@components/layout/Navigation";
import FakeCursor from "@components/atoms/FakeCursor";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navigation />
      <FakeCursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
