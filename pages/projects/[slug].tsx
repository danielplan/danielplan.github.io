import Head from 'next/head';
import styles from '@styles/pages/Portfolio.module.scss';
import ReferenceDetail from '@components/modules/ReferenceDetail';
import BigText from '@components/modules/BigText';
import ReferenceGrid from '@components/modules/ReferenceGrid';
import MobileNavigation from '@components/layout/MobileNavigation';
import references, {
  getReference,
  Reference,
} from '@content/collections/references';
import HighlightedText from '@components/atoms/HighlightedText';
import MetaInfo from '@components/atoms/MetaInfo';

interface Props {
  reference: Reference;
}

const ProjectDetail = ({reference}: Props) => {
  return (
    <>
      <Head>
        <MetaInfo {...reference.meta} />
        <title>{reference.meta.title}</title>
      </Head>
      <main className={styles.main}>
        <ReferenceDetail reference={reference} />
        <BigText>
          <HighlightedText text={reference.description} />
        </BigText>
        <ReferenceGrid reference={reference} />
      </main>
      <MobileNavigation
        back={{
          href: '/projects',
          label: 'Back to my projects',
        }}
      />
    </>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({params}: Params) {
  const reference = getReference(params.slug);

  return {
    props: {reference},
  };
}

export async function getStaticPaths() {
  return {
    paths: references.map((reference) => {
      return {
        params: {
          slug: reference.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default ProjectDetail;
