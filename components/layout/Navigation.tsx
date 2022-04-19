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
      <div className="container">
        <div className={styles.content}>
          <Link href="/">
            <a>
              <Image src="/logo.svg" alt="" width={60} height={60} />
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
      </div>
    </header>
  );
};

export default Navigation;
