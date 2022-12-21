import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Title from './Title'
import "./index.css";
const Register = () => {
  const [submission, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    let temp = { ...submission };
    temp[e.target.name] = e.target.value;
    setData(temp);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    if (submission.password !== submission.confirm_password) {
      alert("Passwords don't match");
      return;
    }
    try {
      const temp = { ...submission };
      delete temp.confirm_password;
      const response = await fetch("/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        navigate("/afterRegister");
      } else alert(`error: ${response.statusText}\n${data.msg}`);
    } catch (error) {
      alert(`error:${error}`);
    }
  };
  return (
    <>
      <div className="center">
        <Title color="#8fe3e2"/>
        <hr style={{ width: "40%" }} />
        <div className="login">
          
        <h2 style={{color:"maroon"}}>Register</h2>
          <form onSubmit={handleSubmit}>
          <label htmlFor="name" style={{fontWeight: "700", color: "blueviolet"}}> Name</label>
            <br />
            <input
              name="name"
              type={"text"}
              onChange={handleChange}
              value={submission.name}
              required
            />
            <br />
            <br />
            <label NID="NID" style={{fontWeight: "700", color: "blueviolet"}}> NID</label>
            <br />
            <input
              name="nid"
              type={"text"}
              onChange={handleChange}
              value={submission.nid}
              required
            />
            <br />
            <br />
            <label htmlFor="nid" style={{fontWeight: "700", color: "blueviolet"}}> Contact</label>
            <br />
            <input
              name="contact_number"
              type={"text"}
              onChange={handleChange}
              value={submission.contact_number}
              required
            />
            <br />
            <br />
            <label htmlFor="email" style={{fontWeight: "700", color: "blueviolet"}}> Email</label>
            <br />
            <input
              name="email"
              type={"email"}
              onChange={handleChange}
              value={submission.email}
              required
            />{" "}
            <br /> <br />
            <label htmlFor="password" style={{fontWeight: "700", color: "blueviolet"}}> Password</label>
            <br />
            <input
              name="password"
              onChange={handleChange}
              type={"password"}
              value={submission.password}
              required
            />
            <br />
            <br />
            <label htmlFor="confirm-password" style={{fontWeight: "700", color: "blueviolet"}}> Confirm password</label>
            <br />
            <input
              name="confirm_password"
              onChange={handleChange}
              type={"password"}
              value={submission.confirm_password}
              required
            />
            <br />
            <br />
            <button class = "button Login">Register</button>
            <br />
            <br />
            <Link to="/login"> Already registered? Login</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

