import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav_item">
        <li className="nav_link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav_link">
          <Link to="/">Clothes</Link>
        </li>
        <li className="nav_link">
          <Link to="/">Shoes</Link>
        </li>
        <li className="nav_link">
          <Link to="/">Accessories</Link>
        </li>
      </ul>
      <div className="nav-menu">
        <div className="nav-logo">Logo</div>
        <button className="nav_btn">btn</button>
      </div>
      <div className="icons">
        <div className="search">
          <input type="text" />
          <div className="icon">
            <img src="./icon/search.svg" alt="" />
          </div>
        </div>
        <Link to="/">
          <img src="./icon/profile.svg" alt="" />
        </Link>
        <Link to="/" className="sub">
          <img src="./icon/korzina.svg" alt="" /> <sub>2</sub>
        </Link>
        <Link to="/"  className="sub">
          <img src="./icon/like.svg" alt="" /><sub>2</sub>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
