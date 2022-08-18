import { PostTag, ReferenceTag, Tag } from "@prisma/client";
import styles from "@styles/modules/Tags.module.scss";
import TagComponent from "../atoms/Tag";

interface Props {
  referenceTags?: (ReferenceTag & { tag: Tag | null })[];
  blogTags?: (PostTag & { tag: Tag | null })[];
  tags?: Tag[];
}

const Tags = ({ tags, referenceTags, blogTags }: Props): JSX.Element => {
  return (
    <div className={styles.inner}>
      {tags &&
        tags.map((tag) => tag && <TagComponent key={tag.id} tag={tag} />)}
      {referenceTags &&
        referenceTags.map(
          ({ tag }) => (tag && <TagComponent key={tag.id} tag={tag} />) || null
        )}
      {blogTags &&
        blogTags.map(
          ({ tag }) => (tag && <TagComponent key={tag.id} tag={tag} />) || null
        )}
    </div>
  );
};

export default Tags;
