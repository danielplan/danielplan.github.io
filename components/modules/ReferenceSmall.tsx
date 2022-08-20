import styles from '@styles/modules/Reference.module.scss';
import SlideIn from '@components/animations/SlideIn';
import Link from 'next/link';
import Tags from './Tags';
import ReferenceImage from './ReferenceImage';
import {Reference} from '@content/collections/references';

interface Props {
  reference: Reference;
}

const ReferenceSmall = ({reference}: Props): JSX.Element => {
  return (
    <article className={styles.module}>
      <Link href={`/projects/${reference.slug}`}>
        <a className={`${styles['small-inner']} clickable`}>
          <SlideIn>
            <div className={styles.tags}>
              <Tags tags={reference.tags} />
            </div>
          </SlideIn>
          <ReferenceImage
            reference={reference}
            animation
            landscape={reference.previewSize === 'small'}
          />
          <div className={styles.content}>
            <SlideIn>
              <h2>{reference.name}</h2>
            </SlideIn>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default ReferenceSmall;
