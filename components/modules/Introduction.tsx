import styles from '@styles/modules/Introduction.module.scss';
import GradientText from '@components/atoms/GradientText';
import SlideIn from '@components/animations/SlideIn';
import Slider from '@components/layout/Slider';
import {Reference} from '@content/collections/references';

interface Props {
  titleSmall: string;
  titleLargeBlack: string;
  titleLargeColor: string;
  description: string;
  references: Reference[];
}

const Introduction = ({
  titleSmall,
  titleLargeBlack,
  titleLargeColor,
  description,
  references,
}: Props): JSX.Element => {
  return (
    <section className={styles.module}>
      <div className={styles.inner}>
        <div className={styles.slider}>
          <Slider
            slides={references.map((r) => ({
              image: r.imagePortrait,
              label: r.name,
              link: `/projects/${r.slug}`,
              color: r.color,
            }))}
          />
        </div>
        <div className={styles.text}>
          <h1>
            <div className="tiny-text">
              <SlideIn>{titleSmall}</SlideIn>
            </div>
            <div className="special">
              <SlideIn delay={300}>
                {titleLargeBlack} <GradientText text={titleLargeColor} />
              </SlideIn>
            </div>
          </h1>
          <SlideIn delay={600}>
            <p>{description}</p>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
