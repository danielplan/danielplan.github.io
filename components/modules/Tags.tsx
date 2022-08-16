import { ReferenceTag, Tag } from "@prisma/client";
import styles from "@styles/modules/Tags.module.scss";

interface Props {
  referenceTags?: (ReferenceTag & { tag: Tag | null })[];
  tags?: Tag[];
}

const Tags = ({ tags, referenceTags }: Props): JSX.Element => {
  return (
    <div className={styles.inner}>
      {tags &&
        tags.map((tag) => (
          <span
            key={tag.id}
            className={styles.tag}
            style={{ color: tag.color }}
          >
            {tag.name}
            <span
              className={styles.background}
              style={{ backgroundColor: tag.color }}
            ></span>
          </span>
        ))}
      {referenceTags &&
        referenceTags.map(
          ({ tag }) =>
            (tag && (
              <span
                key={tag.id}
                className={styles.tag}
                style={{ color: tag.color }}
              >
                {tag.name}
                <span
                  className={styles.background}
                  style={{ backgroundColor: tag.color }}
                ></span>
              </span>
            )) ||
            null
        )}
    </div>
  );
};

export default Tags;
