import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const { setuser } = useContext(UserContext)//set user is already define  

  const handleSubmit = (e) => {
    e.preventDefault()
    setuser({username, password})

  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        value={username}
        onChange={(e) => { setusername(e.target.value)}}
        placeholder="username"
      />

<br />
      <input
        type="text"
        value={ password }
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        placeholder="password"
      />
      <button onClick={handleSubmit} type="button">
        sumbit
      </button>
    </div>
  );
}

export default Login;
