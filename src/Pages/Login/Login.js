import React, { useState } from "react";
import { connect } from "react-redux";
import history from "../../history";
import { login } from "../../Redux/auth/authActions";
const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const manageLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    login({ email, password });
    history.push("/dashboard");
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => manageLogin(e)}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
var actions = {
  login,
};
export default connect(null, actions)(Login);
