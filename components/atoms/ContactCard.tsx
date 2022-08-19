import styles from "@styles/atoms/ContactCard.module.scss";
import Image from "next/image";
import Link from "next/link";
interface Props {
  background: string;
  icon: string;
  label: string;
  value: string;
  url: string;
}

const ContactCard = ({ background, icon, label, value, url }: Props) => {
  return (
    <Link href={url}>
      <a target="_blank" className="clickable">
        <div className={styles.inner}>
          <div
            className={styles.container + " " + styles.front}
            style={{ background }}
          >
            <Image
              src={`/img/icons/${icon}`}
              alt={label}
              width="200"
              height="60"
              objectFit="contain"
            />
            <div className={styles.text}>{label}</div>
          </div>
          <div
            className={styles.container + " " + styles.back}
            style={{ background }}
          >
            <Image
              src={`/img/icons/${icon}`}
              alt={label}
              width="200"
              height="60"
              objectFit="contain"
            />
            <div className={styles.text}>{value}</div>
          </div>
        </div>
      </a>
    </Link>
  );
};
export default ContactCard;
