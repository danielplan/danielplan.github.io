import GradientText from './GradientText';

interface Props {
  text: string;
}

const HighlightedText = ({text}: Props): JSX.Element => {
  return (
    <>
      {text
        .split('_')
        .map((item, i) =>
          i % 2 === 0 ? (
            <span key={i}>{item}</span>
          ) : (
            <GradientText key={i} text={item} />
          )
        )}
    </>
  );
};
export default HighlightedText;
