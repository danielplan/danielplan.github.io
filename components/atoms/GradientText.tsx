import styles from "@styles/atoms/GradientText.module.scss";

interface Props {
  text: string;
}

const GradientText = ({ text }: Props): JSX.Element => {
  return <span className={styles.text}>{text}</span>;
};

export default GradientText;
