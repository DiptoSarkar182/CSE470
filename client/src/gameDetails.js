import "./index.css";
import gamen from "./assets/god of war.jpg";
const GameDetails = () => {
  return (
    <div className="gameDetails">
      <img
        src={gamen}
        alt="gamen"
        style={{ width: "90px", height: "160px" }}
      />
      <p> God Of War  "3$ per month"</p>
      <p>
      His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.
      <br />
            <br />
            <a href="https://www.youtube.com/watch?v=K0u_kAWLJOA">
    <button>Trailer</button>
  </a> 
  <br />
            <br />

            <button>Add to cart</button>
            <br />
            <br />

            <a href="https://www.metacritic.com/game/pc/god-of-war">
    <button>Reviews</button></a> 
      </p>
    </div>
  );
};

export default GameDetails;
