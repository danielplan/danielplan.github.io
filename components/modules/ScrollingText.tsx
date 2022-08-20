import HighlightedText from '@components/atoms/HighlightedText';
import styles from '@styles/modules/ScrollingText.module.scss';
import {useEffect, useRef} from 'react';

interface Props {
  text: string;
  description?: string;
}

const ScrollingText = ({text, description}: Props): JSX.Element => {
  const element = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => {
      if (element.current && container.current) {
        const top = container.current.offsetTop - window.innerHeight * 0.8;
        const bottom = container.current.offsetTop - window.innerHeight * 0.4;
        if (
          document.documentElement.scrollTop >= top &&
          document.documentElement.scrollTop <= bottom
        ) {
          const containerWidth =
            element.current.parentElement?.offsetWidth ?? 0;
          const padding = parseInt(
            window.getComputedStyle(element.current.parentElement!).paddingLeft,
            10
          );
          const textWidth = element.current.offsetWidth;

          const width = containerWidth - padding * 2 - textWidth;

          const percentage =
            (document.documentElement.scrollTop - top) / (bottom - top);

          element.current.style.transform = `translateX(${
            width * percentage
          }px)`;
        }
      }
    };
    handler();
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [element]);
  return (
    <section className={styles.module} ref={container}>
      <div className={styles.inner}>
        <div className="container">
          <div className={styles.text} ref={element}>
            <HighlightedText text={text} />
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
