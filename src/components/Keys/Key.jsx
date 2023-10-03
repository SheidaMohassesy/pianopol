import useSound from "use-sound";
import "./Key.css";

const Key = ({ keyName }) => {
  const file = require(`../../sounds/${keyName}.mp3`);
  const [play] = useSound(file);
  return <div className="pp-key" onClick={play}></div>;
};
export default Key;
