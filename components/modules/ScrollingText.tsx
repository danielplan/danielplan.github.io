import GradientText from "@components/atoms/GradientText";
import styles from "@styles/modules/ScrollingText.module.scss";
import { useEffect, useRef } from "react";

interface Props {
  whiteText?: string;
  coloredText?: string;
  description?: string;
}

const ScrollingText = ({
  whiteText,
  coloredText,
  description,
}: Props): JSX.Element => {
  const text = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => {
      if (text.current && container.current) {
        const top = container.current.offsetTop - window.innerHeight;
        const bottom = container.current.offsetTop - window.innerHeight * 0.25;
        if (
          document.documentElement.scrollTop >= top - 200 &&
          document.documentElement.scrollTop <= bottom - 200
        ) {
          const width =
            text.current.offsetWidth -
            (text.current.parentElement?.offsetWidth ?? 0) +
            20;

          const percentage = Math.min(
            (document.documentElement.scrollTop - top) / (bottom - top),
            1
          );

          text.current.style.transform = `translateX(${-width * percentage}px)`;
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [text]);
  return (
    <section className={styles.module} ref={container}>
      <div className={styles.inner}>
        <div className="container">
          <div className={styles.text} ref={text}>
            {whiteText}
            {coloredText && <GradientText text={" " + coloredText} />}
          </div>
        </div>
      </div>
      <div className="container">
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </section>
  );
};

export default ScrollingText;
