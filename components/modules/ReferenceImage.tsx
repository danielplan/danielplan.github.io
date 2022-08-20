import SlideUp from '@components/animations/SlideIn';
import {Reference} from '@content/collections/references';
import styles from '@styles/modules/Reference.module.scss';
import Image from 'next/image';

interface Props {
  reference: Reference;
  landscape?: boolean;
  animation?: boolean;
}

const ReferenceImage = ({reference, landscape, animation}: Props) => {
  return (
    <SlideUp disable={!animation}>
      <div
        className={styles.image + ' ' + (styles[reference.previewSize] || '')}
        style={reference.color ? {backgroundColor: reference.color} : {}}>
        <div
          className={
            styles['inner-image'] +
            ' ' +
            (reference.color ? styles.smaller : '')
          }>
          <Image
            src={landscape ? reference.imageLandscape : reference.imagePortrait}
            alt={reference.previewImageAlt}
            objectFit={reference.color ? 'contain' : 'cover'}
            layout="fill"
            objectPosition="center"
          />
        </div>
      </div>
    </SlideUp>
  );
};
export default ReferenceImage;
