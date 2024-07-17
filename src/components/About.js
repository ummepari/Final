import React from 'react';

import chefTop from "../assets/images/chef-top.webp";
import chefBot from "../assets/images/chef-bot.webp";

const About = () => {
  return (
    <div className="container about">
			<div className="row">
				<div className="col-2 col-sm-1"></div>

				<div className="col-4 col-sm-10">
					<h2 className="markazi-title color-primary-black m-0">
						Little Lemon
					</h2>
					<h4 className="markazi-subtitle color-primary-black m-0">
						Chicago
					</h4>
					<p className="about-description karla-p color-primary-black">
						Welcome to Little Lemon, your local destination for authentic
						Mediterranean cuisine. Nestled in the heart of the city, Little
						Lemon offers a warm and inviting ambiance, perfect for both
						intimate dinners and lively gatherings. Our menu features a
						delightful array of fresh, flavorful dishes inspired by the
						Mediterranean's rich culinary traditions, from succulent kebabs
						and fresh seafood to vibrant salads and homemade hummus.
					</p>
				</div>

				<div className="col-sm-1 lg-d-none"></div>
				<div className="col-sm-1 lg-d-none"></div>

				<div className="col-4 col-sm-10 pl-2 sm-pl-0">
					<div className="about-image-top">
						<img src={chefTop} alt="Chef Top" className="about-img" />
					</div>
					<div className="about-image-bot">
						<img src={chefBot} alt="Chef Bot" className="about-img" />
					</div>
				</div>

				<div className="col-2 col-sm-1"></div>
			</div>
		</div>
  )
}

export default About
