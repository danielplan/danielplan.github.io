import {Tag} from '@content/collections/tags';
import styles from '@styles/modules/Tags.module.scss';

const Tag = ({tag}: {tag: Tag}) => {
  return (
    <span className={styles.tag} style={{color: tag.color}}>
      {tag.name}
      <span
        className={styles.background}
        style={{backgroundColor: tag.color}}></span>
    </span>
  );
};

export default Tag;
