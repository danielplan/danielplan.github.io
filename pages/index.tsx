import type { NextPage } from "next";
import Head from "next/head";
import styles from "@styles/pages/Home.module.scss";
import Introduction from "@components/modules/Introduction";
import Skills from "@components/modules/Skills";
import ScrollingText from "@components/modules/ScrollingText";
import Button from "@components/atoms/Button";
import BigText from "@components/modules/BigText";
import GradientText from "@components/atoms/GradientText";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>daniel plan</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.main}>
        <Introduction />
        <BigText>
          I’m a <GradientText text="computer science" /> student from Italy.
        </BigText>
        <Skills />
        <ScrollingText
          whiteText="have a look at my"
          coloredText="work"
          description="Let’s have a look at some of the work I created."
        />
        <div className="container centered">
          <Button href="/portfolio" arrowRight>
            Explore my work
          </Button>
        </div>
      </main>
    </>
  );
};

export default Home;
