import React from 'react';
import TestimoniCard from "./TestimoniCard";

import emily from "../assets/images/emily.jpg";
import james from "../assets/images/james.jpg";
import sophia from "../assets/images/sophia.webp";

const Testimoni = () => {

	const testimoniList = [
    {
      src: emily,
      name: "Emily Thompson",
      words:
        "This restaurant is nice and delicious. The service is great, website have a reserve table feature, thats make us easy to reserve.",
    },
    {
      src: james,
      name: "James Rodrigues",
      words:
        "Absolutely loved my experience at Little Lemon. The ambiance is cozy, and the Mediterranean dishes are to die for. Booking online was a breeze.",
    },
    {
      src: sophia,
      name: "Sophia Latjuba",
      words:
        "The best Mediterranean cuisine I've had in a long time. Little Lemon's online reservation system is fantastic. A must-visit for food lovers!",
    },
  ];

  return (
    <div className="hero testimoni bg-primary-green width-100">
			<div className="container">
				<div className="row">
					<div className="col-2 col-sm-1"></div>
					<div className="col-8 col-sm-10 tesmoni-title">
						<h1 className="karla-p fz-16 m-0 color-sec-white">
							Testimonials
						</h1>
						<h1 className="markazi-subtitle m-0 color-primary-yellow testimoni-subtitle">
							We Care About Our Customers Too
						</h1>
					</div>
					<div className="col-2 col-sm-1  "></div>
				</div>

				<div className="row">
					<div className="col-2 col-sm-1"></div>
					<div className="col-8 col-sm-10">
						<div className="container-card">
							<div className="row">
								{testimoniList.map((testimoni, iTesti) => {
									return <TestimoniCard {...testimoni} key={iTesti} />;
								})}
							</div>
						</div>
					</div>
					<div className="col-2 col-sm-1"></div>
				</div>
			</div>
		</div>
  )
}

export default Testimoni
