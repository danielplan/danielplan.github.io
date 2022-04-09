import styles from "@styles/layout/Slider.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import SlideUp from "@components/animations/SlideUp";

interface Slide {
  label: string;
  image: string;
}

interface Props {
  slides: Slide[];
}

const Slider = ({ slides }: Props): JSX.Element => {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    setStarted(true);
    const interval = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div className={styles.container}>
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`${styles.slide}
          ${current == i ? styles.current : ""}
          ${
            (current == 0 && i == slides.length - 1) ||
            (current - 1) % slides.length == i
              ? styles.prev
              : ""
          }
           clickable`}
        >
          <div className={styles.image}>
            <Image src={slide.image} alt="" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.label}>
            <span>{slide.label}</span>
          </div>
        </div>
      ))}
      <div className={styles.legend}>
        <SlideUp>
          {String(current + 1).padStart(2, "0")} -{" "}
          {String(slides.length).padStart(2, "0")}
        </SlideUp>
      </div>
      {started && <div className={styles.progress}></div>}
    </div>
  );
};

export default Slider;
