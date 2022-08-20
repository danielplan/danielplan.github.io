import styles from '@styles/pages/Contact.module.scss';
import Title from '@components/modules/Title';
import Head from 'next/head';
import {NextPage} from 'next';
import BigText from '@components/modules/BigText';
import Contact from '@components/modules/Contact';
import MobileNavigation from '@components/layout/MobileNavigation';
import MetaInfo from '@components/atoms/MetaInfo';
import content from '@content/pages/contact';
import HighlightedText from '@components/atoms/HighlightedText';
import BreadCrumbs from '@components/atoms/BreadCrumbs';
import general from '@content/general';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <MetaInfo {...content.meta} />
        <title>
          {content.meta.title} {general.titleSuffix}
        </title>
        <BreadCrumbs
          breadcrumbs={[
            {
              path: '/contact',
              name: 'Contact',
            },
          ]}
        />
      </Head>
      <main className={styles.main}>
        <div className="container">
          <Title
            smallHeading={content.titleSmall}
            largeHeadingColor={content.titleBig}
          />
          <BigText>
            <HighlightedText text={content.description} />
          </BigText>
          <Contact />
        </div>
      </main>
      <MobileNavigation />
    </>
  );
};

export default Home;
