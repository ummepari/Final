import React, { useEffect, useState, useRef } from "react";
import Nav from "./Nav";
import NavBurger from "./NavBurger";
import Logo from "../assets/images/Logo.svg";
import burger from "../assets/images/burger.svg";

const Header = () => {
  const refBurger = useRef();
  const [width, setWidth] = useState(window.innerWidth);

  const burgerHandle = () => {
    let display = refBurger.current.style.display;
    if (display === "" || display === "none") {
      refBurger.current.style.display = "block";
    } else {
      refBurger.current.style.display = "none";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    if (width > 768) {
      refBurger.current.style.display = "none";
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <header className="container my-2">
      <div className="row">
        <div className="col-2 col-sm-1"></div>

        <div className="col-2 col-sm-10 logo">
          <div className="logo-icon">
            <img src={Logo} alt="Logo Little Lemon" />
          </div>
          <div className="burger-icon-menu" onClick={burgerHandle}>
            <img src={burger} alt="Burger Icon" />
          </div>
        </div>

        <Nav />

        <div className="col-2 col-sm-1"></div>

        <NavBurger ref={refBurger} />
      </div>
    </header>
  );
};

export default Header;
