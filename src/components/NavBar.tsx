import React, { useEffect, useState } from "react";
import { Link, Routes, useLocation, useNavigate } from "react-router-dom";
import { HomePageBodyCard } from "../pages/HomePage";
import { TailwindShoppingCartSVG } from "./tailwind-cart";
import Earphones from "/images/shared/desktop/image-earphones.png";
import Headphones from "/images/shared/desktop/image-headphones.png";
import Speakers from "/images/shared/desktop/image-speakers.png";

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

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-black text-white relative">
      <div
        onClick={() => toggleMenu()}
        className={`w-screen h-screen bg-black top-0 left-0 right-0 bottom-0 opacity-70 z-10 fixed transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      />
      <div
        className={` absolute left-0 right-0 top-16 bg-white pt-20 sm:px-10 z-20 ${
          isOpen
            ? "menu-slider grid grid-cols-1 sm:grid-cols-3 gap-x-4"
            : "menu-close"
        } lg:hidden`}
      >
        <HomePageBodyCard
          styles=" sm:mx-4"
          title="Headphones"
          imageUrl={Headphones}
          goToUrl="/headphones"
        ></HomePageBodyCard>
        <HomePageBodyCard
          styles="mt-5 sm:mt-0 sm:mx-4"
          title="Speakers"
          imageUrl={Speakers}
          goToUrl="/speakers"
        ></HomePageBodyCard>
        <HomePageBodyCard
          styles="mt-5 sm:mt-0 sm:mx-4"
          title="Earphones"
          imageUrl={Earphones}
          goToUrl="/earphones"
        ></HomePageBodyCard>
      </div>

      <nav className="mx-4 xl:container-center">
        <div
          className="flex justify-between items-center py-4 lg:py-8"
          style={{ borderBottom: "0.5px solid rgba(255, 255, 255, 0.2)" }}
        >
          <div className="block md:hidden">
            <button
              className={`${isOpen && "open"}  menu-btn w-6`}
              onClick={toggleMenu}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
          <Link
            to={"/"}
            className="text-3xl cursor-pointer select-none"
            onClick={() => handleActive("/")}
          >
            audiophile
          </Link>

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
