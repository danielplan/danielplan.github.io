import SlideIn from '@components/animations/SlideIn';
import GradientText from '@components/atoms/GradientText';
import {Reference} from '@content/collections/references';
import styles from '@styles/modules/Skills.module.scss';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';
import ReferenceImage from './ReferenceImage';

const slideHeight = 600;

interface Skill {
  name: string;
  references: Reference[];
}
interface Props {
  skills: Skill[];
  titleSmall: string;
  titleLarge: string;
}

const Skills = ({skills, titleSmall, titleLarge}: Props): JSX.Element => {
  const container = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handler = () => {
      if (
        container.current &&
        document.documentElement.scrollTop >= container.current.offsetTop &&
        document.documentElement.scrollTop <=
          container.current.offsetTop + container.current.scrollHeight
      ) {
        setCurrent(
          Math.min(
            Math.floor(
              (document.documentElement.scrollTop -
                container.current.offsetTop) /
                slideHeight
            ),
            skills.length - 1
          )
        );
      }
    };
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [container, skills]);

  return (
    <section
      className={styles.module}
      ref={container}
      style={{height: `calc(100vh + ${slideHeight * 3}px)`}}>
      <div className={styles.inner}>
        <div className="container">
          <div className={styles.content}>
            <h2>
              <div className="tiny-text">
                <SlideIn>{titleSmall}</SlideIn>
              </div>
              <SlideIn delay={300}>
                <div className={'special ' + styles.large}>
                  <GradientText text={titleLarge} />
                </div>
              </SlideIn>
            </h2>
            <div className={styles.skills}>
              {skills.map((skill, i) => (
                <article
                  key={i}
                  className={`${styles.skill}
                  ${i == current ? styles.current : ''}
                  ${current - 1 == i ? styles.previous : ''}
                  ${current + 1 == i ? styles.next : ''}`}>
                  <div key={i} className={styles['label-outer']}>
                    <h3 className={styles.label}>{skill.name}</h3>
                  </div>
                  {skill.references.map((reference, i) => (
                    <div key={i} className={styles['reference-container']}>
                      <ReferenceImage reference={reference} />
                      <div className={styles['image-animation']}></div>
                    </div>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
