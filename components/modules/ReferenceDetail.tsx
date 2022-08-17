import styles from "@styles/modules/ReferenceDetail.module.scss";
import SlideIn from "@components/animations/SlideIn";
import { Reference } from "@prisma/client";
import ReferenceImage from "./ReferenceImage";

interface Props {
  reference: Reference;
}

const ReferenceDetail = ({ reference }: Props): JSX.Element => {
  return (
    <section className={styles.module}>
      <div className="container header">
        <div className={styles.inner + " header-padding"}>
          <div className={styles.image}>
            <ReferenceImage reference={reference} />
          </div>
          <div className={styles.heading}>
            <div className={styles.text}>
              <h1>
                <SlideIn>{reference.name}</SlideIn>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceDetail;
