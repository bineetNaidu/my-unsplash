import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
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
        <button>Add a photo</button>
        <button>
          <Link to="/signin">Signin</Link>
        </button>
        <button>
          <Link to="/signup">Signup</Link>
        </button>
        <button>
          <Link to="/signout">Signout</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
