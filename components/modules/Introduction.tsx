import styles from "@styles/modules/Introduction.module.scss";
import GradientText from "@components/atoms/GradientText";
import SlideIn from "@components/animations/SlideIn";
import Slider from "@components/layout/Slider";

const Introduction = (): JSX.Element => {
  return (
    <section className={styles.module}>
      <div className={styles.inner}>
        <div className={styles.slider}>
          <Slider
            slides={[
              {
                label: "Wastend",
                image: "/image.png",
                color: "#E9FFFF",
                link: "/portfolio/wastend",
              },
              {
                label: "ryoko",
                image: "/image.png",
                color: "#E9FFFF",
                link: "/portfolio/ryoko",
              },
              {
                label: "Hikari",
                image: "/image.png",
                color: "#E9FFFF",
                link: "/portfolio/hikari",
              },
            ]}
          />
        </div>
        <div className={styles.text}>
          <h1>
            <div className="tiny-text">
              <SlideIn>Hey I&apos;m</SlideIn>
            </div>
            <div className="special">
              <SlideIn delay={300}>
                daniel <GradientText text="plan" />
              </SlideIn>
            </div>
          </h1>
          <SlideIn delay={600}>
            <p>I still have to figure out what makes sense here.</p>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
