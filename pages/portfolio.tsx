import type { NextPage } from "next";
import Head from "next/head";
import styles from "@styles/pages/Portfolio.module.scss";

const Portfolio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio - daniel plan</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.main}></main>
    </>
  );
};

export default Portfolio;
