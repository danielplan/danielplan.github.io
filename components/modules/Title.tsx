import GradientText from '@components/atoms/GradientText';
import styles from '@styles/modules/Title.module.scss';
import SlideIn from '@components/animations/SlideIn';

interface Props {
  smallHeading?: string;
  largeHeadingWhite?: string;
  largeHeadingColor?: string;
}

const Title = ({
  smallHeading,
  largeHeadingWhite,
  largeHeadingColor,
}: Props): JSX.Element => {
  return (
    <section className={styles.module}>
      <header className="container header-padding">
        <h1>
          {smallHeading && (
            <div className="tiny-text">
              <SlideIn>{smallHeading}</SlideIn>
            </div>
          )}
          {(largeHeadingWhite || largeHeadingColor) && (
            <SlideIn delay={300}>
              <div className="special">
                {largeHeadingWhite}{' '}
                {largeHeadingColor && <GradientText text={largeHeadingColor} />}
              </div>
            </SlideIn>
          )}
        </h1>
      </header>
    </section>
  );
};

export default Title;
