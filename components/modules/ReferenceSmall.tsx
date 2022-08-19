import styles from "@styles/modules/Reference.module.scss";
import SlideIn from "@components/animations/SlideIn";
import Link from "next/link";
import Tags from "./Tags";
import ReferenceImage from "./ReferenceImage";
import { TaggedReference } from "@pages/projects";

interface Props {
  reference: TaggedReference;
}

const ReferenceSmall = ({ reference }: Props): JSX.Element => {
  return (
    <section className={styles.module}>
      <Link href={`/projects/${reference.slug}`}>
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
    </section>
  );
};

export default ReferenceSmall;
