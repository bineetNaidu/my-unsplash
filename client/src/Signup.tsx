import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import { User } from "./types";

interface Props {
  handleAuthUser: (data: User) => void;
}

const Signup: React.FC<Props> = ({ handleAuthUser }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [hobby, setHobby] = useState("");

  const handleSignup = async () => {
    const { data } = await Axios.post("/api/users/signup", {
      email,
      username,
      password,
      hobby,
    });
    if (data.errors) {
      return alert(data.errors);
    }
    handleAuthUser(data.user);
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
      <h1>Sign up</h1>
      <div className="form__box">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
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
      <div className="form__box">
        <label>Hobby</label>
        <input
          type="text"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
        />
      </div>
      <button type="submit">Signup!</button>
    </form>
  );
};

export default Signup;
