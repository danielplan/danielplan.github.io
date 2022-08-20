import styles from '@styles/modules/ReferenceDetail.module.scss';
import SlideIn from '@components/animations/SlideIn';
import ReferenceImage from './ReferenceImage';
import {Reference} from '@content/collections/references';

interface Props {
  reference: Reference;
}

const ReferenceDetail = ({reference}: Props): JSX.Element => {
  return (
    <section className={styles.module}>
      <header className="container header">
        <div className={styles.inner}>
          <div className={styles.image}>
            <ReferenceImage reference={reference} landscape />
          </div>
          <div className={styles.heading}>
            <div className={styles.text}>
              <h1>
                <SlideIn>{reference.name}</SlideIn>
              </h1>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default ReferenceDetail;
