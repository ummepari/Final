import React from "react";
import Button from "./Button";
import FoodImg from "../assets/images/food-hero.webp";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero width-100 bg-primary-green">
      <div className="container">
        <div className="row">
          <div className="col-2 col-sm-1"></div>

          <div className="hero-content col-4 col-sm-10">
            <h2 className="markazi-title color-primary-yellow m-0">
              Little Lemon
            </h2>
            <h4 className="markazi-subtitle color-sec-white m-0">Chicago</h4>
            <p className="karla-p color-sec-white">
              We are family owned Mediterranean restaurant, focus on traditional
              recipes serve with a modern twist.
            </p>
            <NavLink to="/reservations">
              <Button
                text="Reserve a Table"
                className="btn-hero-reserve karla-sec-category fz-14 bg-primary-yellow"
              />
            </NavLink>
          </div>

          <div className="col-4 sm-d-none">
            <div className="hero-image">
              <img src={FoodImg} alt="Garlic Bread" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
