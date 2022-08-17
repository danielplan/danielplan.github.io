import SlideIn from "@components/animations/SlideIn";
import { Reference } from "@prisma/client";
import styles from "@styles/modules/Reference.module.scss";
import Image from "next/image";

interface Props {
  reference: Reference;
}

const ReferenceImage = ({ reference }: Props) => {
  return (
    <div
      className={styles.image + " " + (styles[reference.imageSize] || "")}
      style={reference.color ? { backgroundColor: reference.color } : {}}
    >
      <Image
        src={`/img/references${reference.previewImage}`}
        alt={reference.name + " preview image"}
        objectFit={reference.color ? "contain" : "cover"}
        layout="fill"
        objectPosition="center"
      />
    </div>
  );
};
export default ReferenceImage;
