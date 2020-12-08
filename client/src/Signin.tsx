import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "./Signup.css";

const Signup: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignup = async () => {
    const { data } = await Axios.post("/api/users/signin", {
      email,
      password,
    });
    if (data.errors) {
      return alert(data.errors);
    }
    history.push("/");
  };

  return (
    <form
      className="auth__form"
      onSubmit={async (e) => {
        e.preventDefault();
        await handleSignup();
      }}
    >
      <h1>Sign in</h1>
      <div className="form__box">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form__box">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>

      <button type="submit">Signin!</button>
    </form>
  );
};

export default Signup;
