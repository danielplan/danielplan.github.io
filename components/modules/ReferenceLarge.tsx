import styles from "@styles/modules/Reference.module.scss";
import SlideIn from "@components/animations/SlideIn";
import { Reference } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  reference: Reference;
  subtitle?: string;
}

const ReferenceLarge = ({ reference, subtitle }: Props): JSX.Element => {
  return (
    <section className={styles.module}>
      <div className="container">
        <Link href={`/portfolio/${reference.slug}`}>
          <a className={styles.inner + " clickable"}>
            <div className={styles.content}>
              <SlideIn>
                <h2>{reference.name}</h2>
              </SlideIn>
              <SlideIn>
                <div className={styles.categories}>{}</div>
              </SlideIn>
            </div>
            <div className={styles.top}>
              <SlideIn direction="down">
                <div className={styles.year}>
                  {new Date(reference.create_date).getFullYear()}
                </div>
              </SlideIn>
              {subtitle && (
                <SlideIn direction="down">
                  <div className={styles.subtitle}>{subtitle}</div>
                </SlideIn>
              )}
            </div>
            <div className={styles.background}>
              <Image
                src={reference.preview_image}
                alt=""
                objectFit="cover"
                layout="fill"
              />
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ReferenceLarge;
