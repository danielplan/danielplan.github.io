import styles from '@styles/layout/Slider.module.scss';
import {useEffect, useState} from 'react';
import SlideIn from '@components/animations/SlideIn';
import Link from 'next/link';
import {Reference} from '@content/collections/references';
import ReferenceImage from '@components/modules/ReferenceImage';

interface Props {
  slides: Reference[];
}

const Slider = ({slides}: Props): JSX.Element => {
  const [current, setCurrent] = useState(0);
  const [transitionState, setTransitionState] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionState(1);
      setTimeout(() => {
        setTransitionState(2);
        setCurrent((i) => (i + 1) % slides.length);
        setTimeout(() => {
          setTransitionState(0);
        }, 750);
      }, 750);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div
      className={`${styles.container} ${
        transitionState > 0 ? styles['transition-' + transitionState] : ''
      }`}>
      {slides.map((slide, i) => (
        <Link href={`/projects/${slide.slug}`} key={i}>
          <a
            className={`${styles.slide}
          ${current == i ? styles.current : ''}
           clickable`}>
            <ReferenceImage reference={slide} />
            <div className={styles.label}>
              <span>{slide.name}</span>
            </div>
          </a>
        </Link>
      ))}
      {transitionState > 0 && <div className={styles.transitionBox}></div>}
      <div className={styles.legend}>
        <SlideIn>
          {String(current + 1).padStart(2, '0')}{' '}
          <span className={styles.tiny}>
            {String(slides.length).padStart(2, '0')}
          </span>
        </SlideIn>
      </div>
    </div>
  );
};

export default Slider;
