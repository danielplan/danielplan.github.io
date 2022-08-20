import MetaInfo from '@components/atoms/MetaInfo';
import MobileNavigation from '@components/layout/MobileNavigation';
import Title from '@components/modules/Title';
import general from '@content/general';
import content from '@content/pages/404';
import Head from 'next/head';

const page404 = () => {
  return (
    <>
      <Head>
        <MetaInfo {...content.meta} />
        <title>
          {content.meta.title} {general.titleSuffix}
        </title>
      </Head>
      <main>
        <Title
          smallHeading={content.titleSmall}
          largeHeadingColor={content.titleBig}
        />
      </main>
      <MobileNavigation />
    </>
  );
};

export default page404;
