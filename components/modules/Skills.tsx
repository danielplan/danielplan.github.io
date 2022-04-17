import SlideIn from "@components/animations/SlideIn";
import GradientText from "@components/atoms/GradientText";
import styles from "@styles/modules/Skills.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slideHeight = 600;
const skills = [
  { label: "Photography", images: ["/image.jpg", "/image.jpg", "/image.jpg"] },
  { label: "Design", images: ["/image2.jpg", "/image.jpg", "/image.jpg"] },
  { label: "Development", images: ["/image.jpg", "/image.jpg", "/image2.jpg"] },
];

const Skills = (): JSX.Element => {
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
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [container]);

  return (
    <section
      className={styles.module}
      ref={container}
      style={{ height: `calc(100vh + ${slideHeight * 3}px)` }}
    >
      <div className={styles.inner}>
        <div className="container">
          <div className={styles.content}>
            <h2>
              <div className="tiny-text">
                <SlideIn>This is</SlideIn>
              </div>
              <SlideIn delay={300}>
                <div className={"special " + styles.large}>
                  what I <GradientText text="do" />
                </div>
              </SlideIn>
            </h2>
            <div className={styles.skills}>
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className={`${styles.skill}
                  ${i == current ? styles.current : ""}
                  ${current - 1 == i ? styles.previous : ""}
                  ${current + 1 == i ? styles.next : ""}`}
                >
                  <div key={i} className={styles["label-outer"]}>
                    <div className={styles.label}>{skill.label}</div>
                  </div>
                  {skill.images.map((image, i) => (
                    <div key={i} className={styles["img-outer"]}>
                      <div className={styles["image-animation"]}></div>
                      <div className={styles.image}>
                        <Image
                          src={image}
                          alt=""
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
