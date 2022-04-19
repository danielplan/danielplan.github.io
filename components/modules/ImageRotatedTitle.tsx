import GradientText from "@components/atoms/GradientText";
import styles from "@styles/modules/ImageRotatedTitle.module.scss";
import SlideIn from "@components/animations/SlideIn";
import Image from "next/image";

interface Props {
  subtitle: string;
  heading: string;
  image: string;
}

const ImageRotatedTitle = ({
  heading,
  subtitle,
  image,
}: Props): JSX.Element => {
  return (
    <section className={styles.module}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.image}>
            <Image src={image} alt="" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.heading}>
            <div className={styles.text}>
              <h1>
                <SlideIn>{heading}</SlideIn>
              </h1>
              <div className={styles.subtitle}>
                <SlideIn delay={300}>{subtitle}</SlideIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageRotatedTitle;
