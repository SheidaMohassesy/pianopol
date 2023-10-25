import Key from "./Key";

const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const blacks = [2, 5, 7, 10, 12];

const Octav = ({ octavIndex }) => {
  const octavValue = octavIndex * 12;

  return (
    <>
      {keys.map((k) => {
        const isBlack = blacks.includes(k);
        return <Key key={k} keyName={k + octavValue} isBlack={isBlack} />;
      })}
    </>
  );
};

export default Octav;
