import { Link } from "react-router-dom";
import "./index.css";

const SearchBox = () => {
  return (
    <center>
    <div className="search-box">
      
      <h1>Game Rent</h1>
      <h2>Search</h2>
      <input name="search" type={"text"} />
      <br />
      <br />
      <button> Search </button>
    </div>
    <br />
      <br />
      <SearchBox />
      <div className="books">
        <Book />
        
        
      </div>
    </center>
  );
};

export default SearchBox;
