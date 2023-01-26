import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TailwindShoppingCartSVG } from "../images/cart/tailwind-cart";
import Earphones from "../images/shared/desktop/image-earphones.png";
import Headphones from "../images/shared/desktop/image-headphones.png";
import Speakers from "../images/shared/desktop/image-speakers.png";
import { HomePageBodyCard } from "../pages/HomePage";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-black text-white">
      <div>
        {/* <div className="">
          <HomePageBodyCard
            title="Headphones"
            imageUrl={Headphones}
            goToUrl="/headphones"
          ></HomePageBodyCard>
          <HomePageBodyCard
            title="Speakers"
            imageUrl={Speakers}
            goToUrl="/speakers"
          ></HomePageBodyCard>
          <HomePageBodyCard
            title="Earphones"
            imageUrl={Earphones}
            goToUrl="/earphones"
          ></HomePageBodyCard>
        </div> */}
      </div>

      <nav className="mx-4">
        <div
          className="flex justify-between items-center"
          style={{ borderBottom: "0.5px solid rgba(255, 255, 255, 0.2)" }}
        >
          <div className="">
            <button
              className={`${isOpen && "open"}  menu-btn w-6`}
              onClick={openMenu}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
          <header className="text-3xl">audiophile</header>

          <div className="hidden md:block ">
            <Link to={"/"} className="uppercase font-semibold">
              Home
            </Link>
            <Link to={"/headphones"} className="uppercase font-semibold">
              Headphones
            </Link>
            <Link to={"/speakers"} className="uppercase font-semibold">
              Speakers
            </Link>
            <Link to={"/earphones"} className="uppercase font-semibold">
              Earphones
            </Link>
          </div>
          <div className="w-6 h-6">
            <TailwindShoppingCartSVG></TailwindShoppingCartSVG>
          </div>
        </div>
      </nav>
    </div>
  );
};
