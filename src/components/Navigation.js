import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

const Navigation = ({ userObj }) => (
  <nav className="nav">
    <div className="container">
      <ul>
        <li>
          <Link to="/">
            <HomeIcon className="iconHome" />
          </Link>
        </li>
        <li>
          <Link to="/profile" className="profile">
            {userObj.displayName}의 Profile
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
