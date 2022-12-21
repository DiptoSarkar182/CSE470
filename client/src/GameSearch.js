import { Link } from "react-router-dom";
import "./index.css";


const GameSearch = () => {
  return (
    <center>
    <div className="search-box">
      
    <h1 style={{fontWeight: "700", color: "DarkSlateBlue",width: "40%"}}>Game Rent</h1>
    <h2 style={{fontWeight: "700", color: "DarkSlateBlue",width: "40%"}}>Search</h2>
      <input name="search" type={"text"} />
      <br />
      <br />
      <button> Search </button>
    </div>
    <br />
      <br />
      
    </center>
  );
};

export default GameSearch;