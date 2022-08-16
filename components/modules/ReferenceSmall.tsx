import styles from "@styles/modules/Reference.module.scss";
import SlideIn from "@components/animations/SlideIn";
import { Reference, ReferenceTag, Tag } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import Tags from "./Tags";
import ReferenceImage from "./ReferenceImage";

interface Props {
  reference: Reference & {
    tags: (ReferenceTag & { tag: Tag | null })[];
  };
}

const ReferenceSmall = ({ reference }: Props): JSX.Element => {
  return (
    <section className={styles.module}>
      <div className="container">
        <Link href={`/portfolio/${reference.slug}`}>
          <a className={`${styles["small-inner"]} clickable`}>
            <SlideIn>
              <div className={styles.tags}>
                <Tags referenceTags={reference.tags} />
              </div>
            </SlideIn>
            <ReferenceImage reference={reference} />
            <div className={styles.content}>
              <SlideIn>
                <h2>{reference.name}</h2>
              </SlideIn>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ReferenceSmall;
