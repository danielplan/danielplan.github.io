import styles from "@styles/layout/Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { EffectFade } from "swiper";

interface Slide {
  label: string;
  image: string;
}

interface Props {
  slides: Slide[];
}

const Slider = ({ slides }: Props): JSX.Element => {
  return (
    <Swiper
      autoplay
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop
      slidesPerView={1}
      speed={1}
      modules={[EffectFade]}
      onSlideChange={() => console.log("slide change")}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className={styles.slide}>
            <div className={styles.image}>
              <Image src={slide.image} alt="" layout="fill" objectFit="cover" />
            </div>
            <div className={styles.label}>{slide.label}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
