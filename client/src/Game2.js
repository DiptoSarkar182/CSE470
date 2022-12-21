import "./index.css";
import gamen from "./assets/fifa.jpg";
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
        <p> Fifa: 23</p>
      </div>
    </Link>
    
  );
};

export default game;
