import useSound from "use-sound";
import "./Key.css";

const Key = ({ keyName, isBlack = false }) => {
  const file = require(`../../sounds/${keyName}.mp3`);
  const [play] = useSound(file);
  return (
    <div className={`pp-key ${isBlack ? "black" : "white"}`} onClick={play}>
      <span> {keyName}</span>
    </div>
  );
};
export default Key;
