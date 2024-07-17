import React from 'react';
import Button from "./Button";
import MenuCard from "./MenuCard";

import bruchetta from "../assets/images/bruchetta.webp";
import salad from "../assets/images/salad.webp";
import lemon from "../assets/images/lemon.jpg";

const Specials = () => {

	const menuList = [
    {
      src: salad,
      alt: "Greek Salad Menu",
      title: "Greek Salad",
      price: "$12.99",
      desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      src: bruchetta,
      alt: "Bruchetta Menu",
      title: "Bruchetta",
      price: "$5.99",
      desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      src: lemon,
      alt: "Lemon Desert Menu",
      title: "Lemon Desert",
      price: "$5.00",
      desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <div className="container highlight">
			<div className="row">
				<div className="col-2 col-sm-1"></div>

				<div className="col-6 col-sm-10">
					<h1 className="markazi-subtitle color-sec-black m-0">
						This weeks specials!
					</h1>
				</div>

				<div className="col-2 highlight-button sm-d-none">
					<Button
						text="Online Menu"
						className="btn-online-menu karla-sec-category fz-14 bg-primary-yellow"
					/>
				</div>

				<div className="col-2 col-sm-1"></div>
			</div>

			<div className="row">
				<div className="col-2 col-sm-1"></div>
				<div className="col-8 col-sm-10">
					<div className="container-card">
						<div className="row">
							{menuList.map((menu, iMenu) => {
								return <MenuCard {...menu} key={iMenu} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Specials
