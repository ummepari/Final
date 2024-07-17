import React from "react";
import Logo from "../assets/images/Logo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer width-100 bg-sec-white">
      <div className="container">
        <div className="col-2 col-sm-1"></div>

        <div className="col-sm-10 footer-sm lg-d-none">
          <p className="karla-highlight fz-14">
            Little Lemon &copy; 2024 All Rights Reserved.
          </p>
        </div>

        <div className="col-2 sm-d-none">
          <img src={Logo} alt="Little Lemon Logo" />
        </div>

        <div className="col-2 sm-d-none">
          <h3 className="karla-sec-category color-sec-black m-0 mb-1">
            Navigation
          </h3>
          <ul className="footer-menu p-0">
            <li className="footer-menu-item">
              <NavLink
                to="/"
                className="karla-sec-category color-sec-black fz-14"
              >
                Home
              </NavLink>
            </li>
            <li className="footer-menu-item">
              <NavLink
                to="/"
                className="karla-sec-category color-sec-black fz-14"
              >
                About
              </NavLink>
            </li>
            <li className="footer-menu-item">
              <NavLink
                to="/"
                className="karla-sec-category color-sec-black fz-14"
              >
                Menu
              </NavLink>
            </li>
            <li className="footer-menu-item">
              <NavLink
                to="/reservations"
                className="karla-sec-category color-sec-black fz-14"
              >
                Reservations
              </NavLink>
            </li>
            <li className="footer-menu-item">
              <NavLink
                to="/"
                className="karla-sec-category color-sec-black fz-14"
              >
                Order Online
              </NavLink>
            </li>
            <li className="footer-menu-item">
              <NavLink
                to="/"
                className="karla-sec-category color-sec-black fz-14"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="col-2 sm-d-none">
          <h3 className="karla-sec-category color-sec-black m-0 mb-1">
            Support
          </h3>
          <ul className="footer-menu p-0">
            <li className="footer-menu-item">
              <NavLink
                to="/"
                className="karla-sec-category color-sec-black fz-14"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="col-2 sm-d-none">
          <h3 className="karla-sec-category color-sec-black m-0 mb-1">
            Social Media
          </h3>
          <ul className="footer-menu p-0">
            <li className="footer-menu-item">
              <a
                href="https://instagram.com"
                className="karla-sec-category color-sec-black fz-14"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="footer-menu-item">
              <a
                href="https://facebook.com"
                className="karla-sec-category color-sec-black fz-14"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="footer-menu-item">
              <a
                href="https://twitter.com"
                className="karla-sec-category color-sec-black fz-14"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>

        <div className="col-2 col-sm-1"></div>
      </div>
    </footer>
  );
};

export default Footer;
