import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="nav col-6 sm-d-none">
      <ul className="menu">
        <li className="menu-item">
          <NavLink to="/" className="karla-sec-category color-sec-black">
            Home
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/" className="karla-sec-category color-sec-black">
            About
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/" className="karla-sec-category color-sec-black">
            Menu
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            to="/reservations"
            className="karla-sec-category color-sec-black"
          >
            Reservations
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/" className="karla-sec-category color-sec-black">
            Order Online
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/" className="karla-sec-category color-sec-black">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
