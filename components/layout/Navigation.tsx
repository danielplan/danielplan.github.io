import Link from "next/link";
import styles from "@styles/layout/Navigation.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

interface NavItem {
  label: string;
  href: string;
}

const menu: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Navigation = (): JSX.Element => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link href="/">
          <a className={styles.logo + " clickable"}>
            <Image src="/logo.svg" alt="" layout="fill" objectFit="contain" />
          </a>
        </Link>
        <nav className={styles.nav}>
          {menu.map((item, i) => (
            <Link key={i} href={item.href} passHref>
              <a
                className={
                  (router.asPath.match(new RegExp(`^${item.href}(/.+)*$`))
                    ? styles.active
                    : undefined) + " clickable"
                }
              >
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
