import styles from "@styles/atoms/ContactCard.module.scss";
interface Props {
  background: string;
  icon: JSX.Element;
  label: string;
  value: string;
}

const ContactCard = ({ background, icon, label, value }: Props) => {
  return (
    <div className={styles.inner}>
      <div className={styles.container} style={{ background }}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.text}>{label}</div>
      </div>
      <div className={styles.container} style={{ background }}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.text}>{value}</div>
      </div>
    </div>
  );
};
export default ContactCard;
