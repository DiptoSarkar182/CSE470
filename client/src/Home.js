// import { Link } from "react-router-dom";
// import "./index.css";
// import game from "./game";

// const Home = () => {
//   return (
//     <center>
//     <div className="search-box">
      
//       <h1>Game Rent</h1>
//       <h2>Search</h2>
//       <input name="search" type={"text"} />
//       <br />
//       <br />
//       <button> Search </button>
//     </div>
//     <br />
//       <br />
      
//     </center>
//   );
// };

// export default Home;



import "./index.css";
import Game from "./Game";
import Game2 from "./Game2";
import Game3 from "./Game3";
import Game4 from "./Game4";
import  GameSearch from './GameSearch'
const Home = () => {
  return (
    <>
      <GameSearch/>
      <div className="books">
        <Game />
        <Game2 />
        <Game3 />
        <Game4 />
        
       
     
      </div>
    </>
  );
};

export default Home;
