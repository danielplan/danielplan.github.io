import SlideIn from "@components/animations/SlideIn";
import GradientText from "@components/atoms/GradientText";
import styles from "@styles/modules/Skills.module.scss";
import Image from "next/image";

const Skills = (): JSX.Element => {
  return (
    <section
      className={styles.module}
      style={{ height: `calc(100vh + ${300 * 3}px)` }}
    >
      <div className={styles.inner}>
        <div className="container">
          <h2>
            <div className="tiny-text">
              <SlideIn>I do some</SlideIn>
            </div>
            <SlideIn delay={300}>
              <div className="special">
                <GradientText text="things" />
              </div>
            </SlideIn>
          </h2>
          <div className={styles.skill}>
            <div className={styles.name}>Photography</div>
            <div className={styles.image}>
              <Image src="/image.jpg" alt="" layout="fill" objectFit="cover" />
            </div>
            <div className={styles.image}>
              <Image src="/image.jpg" alt="" layout="fill" objectFit="cover" />
            </div>
            <div className={styles.image}>
              <Image src="/image.jpg" alt="" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
