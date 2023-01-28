import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TailwindShoppingCartSVG } from "../images/cart/tailwind-cart";
import Earphones from "../images/shared/desktop/image-earphones.png";
import Headphones from "../images/shared/desktop/image-headphones.png";
import Speakers from "../images/shared/desktop/image-speakers.png";
import { HomePageBodyCard } from "../pages/HomePage";

type routes = "home" | "headphones" | "speakers" | "earphones";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("home");

  function handleActive(routeName: routes) {
    setIsActive(routeName);
  }

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

      <nav className="mx-4 md:container-center md:mx-auto">
        <div
          className="flex justify-between items-center py-4  lg:py-8"
          style={{ borderBottom: "0.5px solid rgba(255, 255, 255, 0.2)" }}
        >
          <div className="block md:hidden">
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

          <div className="hidden md:flex justify-between space-x-12">
            <Link
              to={"/"}
              onClick={() => setIsActive("home")}
              className={`uppercase font-semibold hover:text-buttonOrange hover:opacity-80 ${
                isActive == "home" && "text-buttonOrange"
              }`}
            >
              Home
            </Link>
            <Link
              to={"/headphones"}
              onClick={() => setIsActive("headphones")}
              className={`uppercase font-semibold hover:text-buttonOrange hover:opacity-80  ${
                isActive == "headphones" && "text-buttonOrange"
              }`}
            >
              Headphones
            </Link>
            <Link
              to={"/speakers"}
              onClick={() => setIsActive("speakers")}
              className={`uppercase font-semibold hover:text-buttonOrange hover:opacity-80 ${
                isActive == "speakers" && "text-buttonOrange"
              }`}
            >
              Speakers
            </Link>
            <Link
              to={"/earphones"}
              onClick={() => setIsActive("earphones")}
              className={`uppercase font-semibold hover:text-buttonOrange hover:opacity-80 ${
                isActive == "earphones" && "text-buttonOrange"
              }`}
            >
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
