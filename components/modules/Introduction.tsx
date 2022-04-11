import styles from "@styles/modules/Introduction.module.scss";
import GradientText from "@components/atoms/GradientText";
import Button from "@components/atoms/Button";
import SlideIn from "@components/animations/SlideIn";
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
                { label: "ryoko", image: "/image2.jpg" },
                { label: "Hikari", image: "/image.jpg" },
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
            <Button href="/portfolio" arrowRight>
              See my work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
