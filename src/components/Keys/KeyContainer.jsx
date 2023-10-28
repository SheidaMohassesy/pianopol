import "./KeyContainer.css";
import Octav from "./Octav";

const KeyContainer = () => {
  return (
    <div className="pp-key-container">
      <div className="keys">
        <Octav octavIndex={0} />
        <Octav octavIndex={1} />
        <Octav octavIndex={2} />
        <Octav octavIndex={3} />
        <Octav octavIndex={4} />
        <Octav octavIndex={5} />
        <Octav octavIndex={6} />
      </div>
    </div>
  );
};

export default KeyContainer;
