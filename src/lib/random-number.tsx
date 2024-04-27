interface RandomNumberProps {
  minValue: number;
  maxValue: number;
}

const RandomNumber: React.FC<RandomNumberProps> = ({ minValue, maxValue }) => {
  const randomNum =
    Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

  return <span>{randomNum}</span>;
};

export default RandomNumber;
