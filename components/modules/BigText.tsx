import SlideIn from '@components/animations/SlideIn';
import styles from '@styles/modules/BigText.module.scss';
import {ReactNode} from 'react';
interface Props {
  children: ReactNode;
}
const BigText = ({children}: Props) => {
  return (
    <section className={styles.module}>
      <div className="container">
        <SlideIn style="smooth">
          <p className={styles.text}>{children}</p>
        </SlideIn>
      </div>
    </section>
  );
};
export default BigText;
