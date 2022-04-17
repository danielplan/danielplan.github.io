import GradientText from "@components/atoms/GradientText";
import styles from "@styles/modules/ScrollingText.module.scss";
import { useEffect, useRef } from "react";

interface Props {
  whiteText?: string;
  coloredText?: string;
}

const ScrollingText = ({ whiteText, coloredText }: Props): JSX.Element => {
  const text = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => {
      if (text.current && container.current) {
        const offset = container.current.offsetTop - window.innerHeight * 0.5;
        if (
          document.documentElement.scrollTop >= offset &&
          document.documentElement.scrollTop <= offset + window.innerHeight
        ) {
          const width =
            text.current.offsetWidth -
            (text.current.parentElement?.offsetWidth ?? 0) +
            20;
          const percentage = Math.min(
            (document.documentElement.scrollTop - offset) /
              text.current.scrollHeight,
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
      <div className="container">
        <div className={styles.text} ref={text}>
          {whiteText}
          {coloredText && <GradientText text={" " + coloredText} />}
        </div>
      </div>
    </section>
  );
};

export default ScrollingText;