import Link from 'next/link';
import styles from '@styles/layout/Navigation.module.scss';
import Image from 'next/image';
import {useRouter} from 'next/router';

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    icon: 'home',
    href: '/',
  },
  {
    label: 'Projects',
    icon: 'portfolio',
    href: '/projects',
  },
  {
    label: 'Blog',
    icon: 'blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    icon: 'contact',
    href: '/contact',
  },
];

const Navigation = (): JSX.Element => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link href="/">
          <a className={styles.logo + ' clickable'}>
            <Image
              src="/img/logo.svg"
              alt="Logo daniel plan"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </Link>
        <nav className={styles.nav}>
          {navigationItems.map((item, i) => (
            <Link key={i} href={item.href} passHref>
              <a
                className={
                  ((router.pathname === '/' && item.href === '/') ||
                  (item.href !== '/' && router.pathname.startsWith(item.href))
                    ? styles.active
                    : '') + ' clickable'
                }>
                {item.label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
