import styles from "@styles/modules/Tags.module.scss";
import { Tag } from "@prisma/client";

const Tag = ({ tag }: { tag: Tag }) => {
  return (
    <span className={styles.tag} style={{ color: tag.color }}>
      {tag.name}
      <span
        className={styles.background}
        style={{ backgroundColor: tag.color }}
      ></span>
    </span>
  );
};

export default Tag;
