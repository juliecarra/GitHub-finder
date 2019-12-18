import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({
  navbarBrand,
  navbarLink1,
  navbarLink2,
  navbarItem1,
  navbarItem2,
  fontAwesome
}) => {
  const navbarStyle = {
    color: "#fff"
  };
  return (
    <div className="Navbar">
      <NavLink exact activeClassName="item" to="/" style={navbarStyle}>
        <i className={fontAwesome}></i> {navbarBrand}
      </NavLink>
      <NavLink
        exact
        activeClassName="item"
        to={navbarLink1}
        style={navbarStyle}
      >
        {navbarItem1}
      </NavLink>
      <NavLink
        exact
        activeClassName="item"
        to={navbarLink2}
        style={navbarStyle}
      >
        {navbarItem2}
      </NavLink>
    </div>
  );
};

Navbar.defaultProps = {
  navbarBrand: "GitHub finder",
  navbarLink1: "/",
  navbarLink2: "/about",
  navbarItem1: "Home",
  navbarItem2: "About",
  fontAwesome: "fab fa-github"
};
export default Navbar;
