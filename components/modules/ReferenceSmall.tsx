import styles from "@styles/modules/Reference.module.scss";
import SlideIn from "@components/animations/SlideIn";
import { Reference } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  reference: Reference;
  textRight?: boolean;
}

const ReferenceSmall = ({ reference, textRight }: Props): JSX.Element => {
  return (
    <section className={styles.module}>
      <div className="container">
        <Link href={`/portfolio/${reference.slug}`}>
          <a
            className={`${styles["small-inner"]} ${
              textRight ? styles["text-right"] : ""
            } clickable`}
          >
            <div className={styles.content}>
              <SlideIn direction={textRight ? "left" : "right"}>
                <h2>{reference.name}</h2>
              </SlideIn>
              <SlideIn direction={textRight ? "left" : "right"}>
                <div className={styles.categories}>{}</div>
              </SlideIn>
            </div>
            <div className={styles.top}>
              <SlideIn direction={textRight ? "right" : "left"}>
                <div className={styles.year}>
                  {new Date(reference.create_date).getFullYear()}
                </div>
              </SlideIn>
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

export default ReferenceSmall;