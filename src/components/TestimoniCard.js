import React from "react";

import rating from "../assets/images/rating.png";

const TestimoniCard = (props) => {
  return (
    <div className="col-1 col-sm-12">
      <div className="testimoni-card">
        <div className="testimoni-user">
          <div className="testimoni-photo">
            <img src={props.src} alt="lemon" />
          </div>
        </div>
        <div className="testimoni-description bg-sec-white">
          <div className="flex-center">
            <h2 className="markazi fz-20 mt-1">{props.name}</h2>
          </div>
          <div className="flex-center">
            <p className="karla-p fz-12 text-center m-0">{props.words}</p>
          </div>
          <div className="flex-center testimoni-rating">
            <img src={rating} alt="Star Rating" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimoniCard;
