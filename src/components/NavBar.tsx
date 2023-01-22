import React from "react";
import { Link } from "react-router-dom";
import { TailwindShoppingCartSVG } from "../images/cart/tailwind-cart";

export const NavBar = () => {
  return (
    <div className="bg-black">
      <nav className="container-center text-white">
        <div
          className="flex justify-between items-center py-6"
          style={{ borderBottom: "0.5px solid rgba(255, 255, 255, 0.2)" }}
        >
          <header className="font-bold text-3xl ">audiophile</header>
          <div className="space-x-9">
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
