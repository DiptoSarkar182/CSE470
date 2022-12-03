import { Link } from "react-router-dom";
import "./index.css";
import Title from './Title'
const Register = () => {
  return (
    <>
      <div className="center">
        <Title color="#8fe3e2"/>
        <hr style={{ width: "40%" }} />
        <div className="login">
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <h2 style={{color:"maroon"}}>Register</h2>
          <form>
            <label htmlFor="name"> Name</label>
            <br />
            <input name="name" type={"text"} required />
            <br />
            <br />
            <label NID="NID"> NID</label>
            <br />
            <input name="dob" type={"text"} required />
            <br />
            <br />
            <label htmlFor="email"> Email</label>
            <br />
            <input name="email" type={"email"} required /> <br /> <br />
            <label htmlFor="password"> Password</label>
            <br />
            <input name="password" type={"password"} required />
            <br />
            <br />
            <label htmlFor="confirm-password"> Confirm password</label>
            <br />
            <input name="confirm-password" type={"password"} required />
            <br />
            <br />
            <button> Register</button>
            <br />
            <br />
            <Link to="/"> Already registered? Login</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
