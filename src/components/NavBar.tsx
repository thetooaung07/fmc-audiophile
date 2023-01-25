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
    <div className="bg-black nav-section relative">
      <div
        className={` ${
          isOpen ? "open-slide" : "close-slide"
        } md:hidden absolute z-10 left-0 right-0 bg-white top-[85px] py-10`}
      >
        <div className=" grid grid-cols-3 items-center gap-2 mx-4">
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
        </div>
      </div>

      <nav className="container-center text-white">
        <div
          className="flex justify-between items-center py-6"
          style={{ borderBottom: "0.5px solid rgba(255, 255, 255, 0.2)" }}
        >
          <div className="flex items-center">
            <div className="md:hidden block">
              <button
                onClick={openMenu}
                className={`${
                  isOpen ? "open" : ""
                } w-6 menu-btn cursor-pointer relative mr-6 focus:outline-none`}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
            <header className="font-bold text-3xl ">audiophile</header>
          </div>
          <div className="space-x-9 md:flex hidden">
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
