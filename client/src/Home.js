
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
      <div className="gamestyle">
        <Game />
        <Game2 />
        <Game3 />
        <Game4 />
        
       
     
      </div>
    </>
  );
};

export default Home;
