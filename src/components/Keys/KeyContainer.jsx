import "./KeyContainer.css";
import Octav from "./Octav";

const KeyContainer = () => {
  return (
    <div className="pp-key-container">
      <Octav octavIndex={0} />
      <Octav octavIndex={1} />
    </div>
  );
};

export default KeyContainer;
