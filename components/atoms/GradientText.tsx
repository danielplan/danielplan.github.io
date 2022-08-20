import styles from '@styles/atoms/GradientText.module.scss';

interface Props {
  text: string;
}

const GradientText = ({text}: Props): JSX.Element => {
  return <strong className={styles.text}>{text}</strong>;
};

export default GradientText;
