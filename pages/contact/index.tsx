import styles from "@styles/pages/Contact.module.scss";
import Title from "@components/modules/Title";
import Head from "next/head";
import { NextPage } from "next";
import BigText from "@components/modules/BigText";
import GradientText from "@components/atoms/GradientText";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>contact - daniel plan</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.main}>
        <div className="container">
          <Title smallHeading="Let's get in" largeHeadingColor="touch!" />
          <BigText>
            Here are some ways to <GradientText text="contact" /> me.
          </BigText>
        </div>
      </main>
    </>
  );
};

export default Home;
