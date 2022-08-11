import styles from "@styles/animations/SlideIn.module.scss";
import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "right" | "left";
  style?: "smooth";
}

const SlideUp = ({
  children,
  delay,
  direction = "up",
  style,
}: Props): JSX.Element => {
  const element = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (element && element.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          setVisible(entries[0].isIntersecting);
        },
        {
          rootMargin: style === "smooth" ? "-100px 0px -100px 0px" : "0px",
        }
      );
      observer.observe(element.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [element, style]);
  return (
    <div className={styles.container}>
      <div
        style={delay ? { animationDelay: `${delay}ms` } : undefined}
        ref={element}
        className={
          (visible ? styles[`slide-${direction}`] : "") +
          " " +
          (style ? styles[style] : "")
        }
      >
        {children}
      </div>
    </div>
  );
};

export default SlideUp;
