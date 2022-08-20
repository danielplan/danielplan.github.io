import styles from '@styles/layout/MobileNavigation.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {navigationItems, NavItem} from './Navigation';

interface Props {
  back?: NavItem;
  next?: NavItem;
}

const MobileNavigation = ({back, next}: Props): JSX.Element => {
  const router = useRouter();
  return (
    <nav className={styles.container}>
      {back || next ? (
        <>
          {back && (
            <Link href={back.href} passHref>
              <a className={styles.item + ' ' + styles.action + ' clickable'}>
                <div className={styles.icon}>
                  <Image
                    src={`/img/icons/back.svg`}
                    alt={back.label}
                    width="50"
                    height="25"
                    objectFit="contain"
                  />
                </div>
                <div className={styles.text}>{back.label}</div>
              </a>
            </Link>
          )}
          {next && (
            <Link href={next.href} passHref>
              <a className={styles.item + ' ' + styles.action + ' clickable'}>
                <div className={styles.icon}>
                  <Image
                    src={`/img/icons/next.svg`}
                    alt={next.label}
                    width="50"
                    height="25"
                    objectFit="contain"
                  />
                </div>
                <div className={styles.text}>{next.label}</div>
              </a>
            </Link>
          )}
        </>
      ) : (
        navigationItems.map((item, i) => (
          <Link key={i} href={item.href} passHref>
            <a
              className={
                styles.item +
                ' ' +
                ((router.pathname === '/' && item.href === '/') ||
                (item.href !== '/' && router.pathname.startsWith(item.href))
                  ? styles.active
                  : '')
              }>
              <div className={styles.icon}>
                <Image
                  src={`/img/icons/${item.icon}.svg`}
                  alt={item.label}
                  width="50"
                  height="25"
                  objectFit="contain"
                />
                <div className={styles.active}>
                  <Image
                    src={`/img/icons/${item.icon}__active.svg`}
                    alt={item.label}
                    width="50"
                    height="25"
                    objectFit="contain"
                  />
                </div>
              </div>
              {item.label}
            </a>
          </Link>
        ))
      )}
    </nav>
  );
};

export default MobileNavigation;
