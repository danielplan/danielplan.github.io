import Head from 'next/head';
import styles from '@styles/pages/Portfolio.module.scss';
import Title from '@components/modules/Title';
import ReferenceLarge from '@components/modules/ReferenceLarge';
import ReferenceSmall from '@components/modules/ReferenceSmall';
import MobileNavigation from '@components/layout/MobileNavigation';
import references, {Reference} from '@content/collections/references';
import MetaInfo from '@components/atoms/MetaInfo';
import content from '@content/pages/projects';
import BreadCrumbs from '@components/atoms/BreadCrumbs';
import general from '@content/general';

interface Props {
  references: Reference[];
}

const Projects = ({references}: Props) => {
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
              path: '/projects',
              name: 'Projects',
            },
          ]}
        />
      </Head>
      <main className={styles.main}>
        <Title
          smallHeading={content.titleSmall}
          largeHeadingColor={content.titleBig}
        />
        {references && references[0] && (
          <ReferenceLarge reference={references[0]} />
        )}
        <section className="container">
          <div className={styles['reference-list']}>
            {references.slice(1).map((reference) => (
              <div
                className={
                  styles['reference-item'] + ' ' + styles[reference.previewSize]
                }
                key={reference.slug}>
                <ReferenceSmall reference={reference} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <MobileNavigation />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {references},
  };
}

export default Projects;
