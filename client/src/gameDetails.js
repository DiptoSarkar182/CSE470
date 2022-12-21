import "./index.css";
import manga0 from "./assets/god of war.jpg";
import { Link } from "react-router-dom";
const gameDetails = () => {
  return (
    <Link to="/details">
      <div className="tile">
        <img
          src={manga0}
          alt="manga"
          style={{ width: "90px", height: "160px" }}
        />
        <p> God Of War</p>
      </div>
    </Link>
  );
};

export default gameDetails;
