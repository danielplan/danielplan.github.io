import {Reference} from '@content/collections/references';
import styles from '@styles/modules/ReferenceGrid.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  reference: Reference;
}

const ReferenceGrid = ({reference}: Props): JSX.Element => {
  const hasText = reference.text || reference.title;
  return (
    <section className={styles.module}>
      <div className="container">
        {reference.video && (
          <div className={styles.video}>
            <video src={reference.video} muted autoPlay loop={true}></video>
          </div>
        )}
        <div className={styles.grid}>
          <div className={styles.item + ' ' + styles['item-0']}>
            <div className={styles['inner-item']}>
              {hasText && (
                <div className={styles.text + ' ' + styles['item-content']}>
                  <h2>{reference.title}</h2>
                  <p>{reference.text}</p>
                </div>
              )}
              <Image
                src={`/img/references/${reference.images[0]}`}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          {reference.link && (
            <Link href={reference.link} passHref>
              <a
                className={styles.item + ' clickable ' + styles['item-1']}
                target="_blank"
                rel="noopener noreferrer">
                <div className={styles['inner-item']}>
                  <div className={styles['item-content']}>
                    Let&apos;s explore it.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="86"
                      height="16"
                      viewBox="0 0 86 16">
                      <path d="M85.7071 8.7071C86.0976 8.31657 86.0976 7.68341 85.7071 7.29289L79.3431 0.928925C78.9526 0.538401 78.3195 0.538401 77.9289 0.928925C77.5384 1.31945 77.5384 1.95261 77.9289 2.34314L83.5858 7.99999L77.9289 13.6568C77.5384 14.0474 77.5384 14.6805 77.9289 15.0711C78.3195 15.4616 78.9526 15.4616 79.3431 15.0711L85.7071 8.7071ZM8.74228e-08 9L85 8.99999L85 6.99999L-8.74228e-08 7L8.74228e-08 9Z" />
                    </svg>
                  </div>
                </div>
              </a>
            </Link>
          )}
          {reference.images.slice(1).map((image, i) => (
            <div
              key={i}
              className={styles.item + ' ' + styles['item-' + (i + 2)]}>
              <div className={styles['inner-item']}>
                <Image
                  src={`/img/references/${image}`}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferenceGrid;
