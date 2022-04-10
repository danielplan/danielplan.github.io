import styles from "@styles/animations/SlideUp.module.scss";
import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

const SlideUp = ({ children, delay }: Props): JSX.Element => {
  const element = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (element && element.current) {
      const observer = new IntersectionObserver((entries) => {
        setVisible(entries[0].isIntersecting);
      }, {});
      observer.observe(element.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [element]);
  return (
    <div className={styles.container}>
      <div
        style={delay ? { animationDelay: `${delay}ms` } : undefined}
        ref={element}
        className={visible ? styles.animate : ""}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideUp;
