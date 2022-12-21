import "./index.css";
import gamen from "./assets/cod mw2.jpg";
import { Link } from "react-router-dom";
const game = () => {
  return (
    <Link to="/details">
      <div className="tile">
        <img
          src={gamen}
          alt="gamen"
          style={{ width: "100px", height: "160px" }}
        />
        <p> Call of Duty: Modern Warfare 2</p>
      </div>
    </Link>
    
  );
};

export default game;
