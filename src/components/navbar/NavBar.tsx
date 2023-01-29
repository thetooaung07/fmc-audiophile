import React, { useEffect, useState } from "react";
import { Link, Routes, useLocation } from "react-router-dom";
import Earphones from "../../../src/images/shared/desktop/image-earphones.png";
import Headphones from "../../../src/images/shared/desktop/image-headphones.png";
import Speakers from "../../../src/images/shared/desktop/image-speakers.png";
import { TailwindShoppingCartSVG } from "../../images/cart/tailwind-cart";
import { HomePageBodyCard } from "../../pages/HomePage";

// type routes = "" | "headphones" | "speakers" | "earphones";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isActive, setIsActive] = useState(location.pathname);

  useEffect(() => {
    handleActive(location.pathname);
  }, [location]);

  function handleActive(routeName: string) {
    setIsActive(routeName);
  }

  function openMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-black text-white">
      <div>
        <div className="">
          {/* <HomePageBodyCard
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
          ></HomePageBodyCard> */}
        </div>
      </div>

      <nav className="mx-4 xl:container-center md:mx-auto">
        <div
          className="flex justify-between items-center py-4 lg:py-8"
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
              onClick={() => handleActive("/")}
              className={`uppercase font-semibold hover:text-buttonOrange hover:opacity-80 ${
                isActive == "/" && "text-buttonOrange"
              }`}
            >
              Home
            </Link>
            <Link
              to={"/headphones"}
              onClick={() => handleActive("/headphones")}
              className={`uppercase font-semibold hover:text-buttonOrange hover:opacity-80  ${
                isActive == "/headphones" && "text-buttonOrange"
              }`}
            >
              Headphones
            </Link>
            <Link
              to={"/speakers"}
              onClick={() => handleActive("/speakers")}
              className={`uppercase font-semibold hover:text-buttonOrange hover:opacity-80 ${
                isActive == "/speakers" && "text-buttonOrange"
              }`}
            >
              Speakers
            </Link>
            <Link
              to={"/earphones"}
              onClick={() => handleActive("/earphones")}
              className={`uppercase font-semibold hover:text-buttonOrange hover:opacity-80 ${
                isActive == "/earphones" && "text-buttonOrange"
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
