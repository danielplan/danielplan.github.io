import "@styles/base.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navigation from "@components/layout/Navigation";
import FakeCursor from "@components/atoms/FakeCursor";
import Footer from "@components/layout/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      <FakeCursor />
    </>
  );
}

export default MyApp;
