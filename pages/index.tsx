import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '@styles/pages/Home.module.scss';
import Introduction from '@components/modules/Introduction';
import Skills from '@components/modules/Skills';
import ScrollingText from '@components/modules/ScrollingText';
import Button from '@components/atoms/Button';
import BigText from '@components/modules/BigText';
import MobileNavigation from '@components/layout/MobileNavigation';
import content from '@content/pages/home';
import HighlightedText from '@components/atoms/HighlightedText';
import MetaInfo from '@components/atoms/MetaInfo';
import BreadCrumbs from '@components/atoms/BreadCrumbs';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <MetaInfo {...content.meta} />
        <BreadCrumbs
          breadcrumbs={[
            {
              path: '/',
              name: 'Home',
            },
          ]}
        />
        <title>{content.meta.title}</title>
      </Head>
      <main className={styles.main}>
        <Introduction
          titleSmall={content.intro.titleSmall}
          titleLargeBlack={content.intro.titleLargeBlack}
          titleLargeColor={content.intro.titleLargeColor}
          description={content.intro.description}
          references={content.intro.references}
        />
        <BigText>
          <HighlightedText text={content.introText} />
        </BigText>
        <Skills
          skills={content.skills.list}
          titleSmall={content.skills.titleSmall}
          titleLarge={content.skills.titleLarge}
        />

        <ScrollingText
          text={content.callToAction.title}
          description={content.callToAction.description}
        />
        <div className="container centered">
          <Button href="/projects" arrowRight>
            {content.callToAction.button}
          </Button>
        </div>
      </main>
      <MobileNavigation />
    </>
  );
};

export default Home;
