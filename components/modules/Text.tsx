import SlideIn from '@components/animations/SlideIn';
import GradientText from '@components/atoms/GradientText';
import styles from '@styles/modules/Text.module.scss';
import {ReactNode} from 'react';

interface Props {
  smallHeading?: string;
  largeHeadingWhite?: string;
  largeHeadingColor?: string;
  children: ReactNode;
}

const Text = ({
  smallHeading,
  largeHeadingWhite,
  largeHeadingColor,
  children,
}: Props): JSX.Element => {
  return (
    <section className={styles.module}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.heading}>
            <h2>
              {smallHeading && (
                <div className="tiny-text">
                  <SlideIn>{smallHeading}</SlideIn>
                </div>
              )}
              {(largeHeadingWhite || largeHeadingColor) && (
                <SlideIn delay={300}>
                  <div className="special">
                    {largeHeadingWhite}{' '}
                    {largeHeadingColor && (
                      <GradientText text={largeHeadingColor} />
                    )}
                  </div>
                </SlideIn>
              )}
            </h2>
          </div>
          <div className={styles.text}>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Text;
