import styles from "@styles/animations/SlideUp.module.scss";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

const SlideUp = ({ children, delay }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <div style={delay ? { animationDelay: `${delay + 200}ms` } : undefined}>
        {children}
      </div>
    </div>
  );
};

export default SlideUp;
