import styles from "@styles/modules/Introduction.module.scss";
import GradientText from "@components/atoms/GradientText";
import Button from "@components/atoms/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import SlideUp from "@components/animations/SlideUp";
import Slider from "@components/layout/Slider";

const Introduction = (): JSX.Element => {
  return (
    <section className={styles.module}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.slider}>
            <Slider
              slides={[
                { label: "Wastend", image: "/image.jpg" },
                { label: "ryoko", image: "/image.jpg" },
              ]}
            />
          </div>
          <div className={styles.text}>
            <h1>
              <div className="tiny-text slide-up">
                <SlideUp>Hey I&apos;m</SlideUp>
              </div>
              <div className="special">
                <SlideUp delay={300}>
                  daniel <GradientText text="plan" />
                </SlideUp>
              </div>
            </h1>
            <Button href="/portfolio" arrowRight>
              Get to know me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
