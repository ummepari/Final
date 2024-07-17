import React from "react";
import bike from "../assets/images/bike.png";

const MenuCard = (props) => {
  return (
    <div className="card col-1 col-sm-12 bg-sec-white">
      <div className="card-image">
        <img src={props.src} alt={props.alt} />
      </div>

      <div className="card-title">
        <h3 className="markazi fw-600 fz-18 color-sec-black mt-1">
          {props.title}
        </h3>
        <h3 className="karla-card-title fz-14 color-sec-pink mt-1">
          {props.price}
        </h3>
      </div>

      <p className="karla-p fz-12">{props.desc}</p>

      <div className="card-order">
        <h4 className="karla-card-title fz-12 color-sec-black">
          Order a delivery
        </h4>
        <img src={bike} alt="Delivery Bike" />
      </div>
    </div>
  );
};

export default MenuCard;
