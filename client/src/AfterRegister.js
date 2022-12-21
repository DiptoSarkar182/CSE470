import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Title from "./Title";
import "./index.css";
const AfterRegister = () => {
 
  return (
    <>
      <div className="center">
      <Title color="#8fe3e2"/>
        <hr style={{ width: "40%" }} />
        
        <h2 style={{color:"maroon",fontWeight: "700", color: "MediumSpringGreen"}}>Registration Complete</h2>
          <form >
          
            
            <br />
            <br />
            <Link to="/login" class = "button Login"> Login</Link>
          </form>
        </div>
      
    </>
  );
};

export default AfterRegister;
