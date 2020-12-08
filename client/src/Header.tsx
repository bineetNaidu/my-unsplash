import React from "react";
import { Link, useHistory } from "react-router-dom";
import { User } from "./types";
import Axios from "axios";
import "./Header.css";

interface Props {
  user: User | undefined;
}

const Header: React.FC<Props> = ({ user }) => {
  const history = useHistory();

  const handleSignout = async () => {
    const { data } = await Axios.post("/api/users/signout");
    if (data.errors) {
      return alert(data.errors);
    }
    history.push("/");
  };
  return (
    <header className="header">
      <div className="header__l">
        <h1>My Unsplash</h1>
        <div className="header__inputBox">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search by name" />
        </div>
      </div>
      <div className="header__r">
        {user ? (
          <>
            <button>Add a photo</button>
            <button onClick={handleSignout}>Signout</button>
          </>
        ) : (
          <>
            <button>
              <Link to="/signin">Signin</Link>
            </button>
            <button>
              <Link to="/signup">Signup</Link>
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
