import {Tag} from '@content/collections/tags';
import styles from '@styles/modules/Tags.module.scss';
import TagComponent from '../atoms/Tag';

interface Props {
  tags: Tag[];
}

const Tags = ({tags}: Props): JSX.Element => {
  return (
    <div className={styles.inner}>
      {tags &&
        tags.map((tag) => tag && <TagComponent key={tag.name} tag={tag} />)}
    </div>
  );
};

export default Tags;
