import React from "react";
import "./Signup.css";

const Signup: React.FC = () => {
  return (
    <form className="auth__form">
      <h1>Sign up</h1>
      <div className="form__box">
        <label>Username</label>
        <input type="text" />
      </div>
      <div className="form__box">
        <label>Email</label>
        <input type="email" />
      </div>
      <div className="form__box">
        <label>Password</label>
        <input type="password" />
      </div>
      <div className="form__box">
        <label>Hobby</label>
        <input type="text" />
      </div>
      <button type="submit">Signup!</button>
    </form>
  );
};

export default Signup;
