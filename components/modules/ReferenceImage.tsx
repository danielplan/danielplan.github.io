import SlideIn from '@components/animations/SlideIn';
import {Reference} from '@content/collections/references';
import styles from '@styles/modules/Reference.module.scss';
import Image from 'next/image';

interface Props {
  reference: Reference;
  landscape?: boolean;
}

const ReferenceImage = ({reference, landscape}: Props) => {
  return (
    <div
      className={styles.image + ' ' + (styles[reference.previewSize] || '')}
      style={reference.color ? {backgroundColor: reference.color} : {}}>
      <Image
        src={`/img/references${
          landscape ? reference.imageLandscape : reference.imagePortrait
        }`}
        alt={reference.name + ' preview image'}
        objectFit={reference.color ? 'contain' : 'cover'}
        layout="fill"
        objectPosition="center"
      />
    </div>
  );
};
export default ReferenceImage;
