import SlideUp from "@components/animations/SlideUp";
import GradientText from "@components/atoms/GradientText";
import styles from "@styles/modules/Text.module.scss";
import { ReactNode } from "react";

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
                  <SlideUp>{smallHeading}</SlideUp>
                </div>
              )}
              {(largeHeadingWhite || largeHeadingColor) && (
                <SlideUp delay={300}>
                  {largeHeadingWhite}{" "}
                  {largeHeadingColor && (
                    <GradientText text={largeHeadingColor} />
                  )}
                </SlideUp>
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
