import "./KeyContainer.css";
import Key from "./Key";

const KeyContainer = () => {
  return (
    <div className="pp-key-container">
      <Key keyName="1" />
      <Key keyName="2" />
      <Key keyName="10" />
      <Key keyName="15" />
    </div>
  );
};

export default KeyContainer;
