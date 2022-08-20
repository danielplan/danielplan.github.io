import Link from 'next/link';
import styles from '@styles/layout/Footer.module.scss';
import Image from 'next/image';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.container}>
      <div className="container">
        <div className={styles.content}>
          <Link href="/">
            <a>
              <Image
                src="/logo.svg"
                alt="website logo"
                width={100}
                height={100}
              />
            </a>
          </Link>
          <div>
            created by <strong>daniel plan</strong>, {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
