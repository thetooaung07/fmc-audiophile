import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import HeroImage from "../images/home/desktop/image-hero.jpg";

export const HomePage = () => {
  // const { category } = useParams();
  // console.log(category);
  return (
    <div className="bg-black text-white">
      <div className="container-center relative">
        <div className="absolute top-32 w-96">
          <p className="text-lg opacity-70" style={{ letterSpacing: 10 }}>
            New Product
          </p>
          <p className="text-6xl py-8 font-semibold">XX99 MARK II HEADPHONES</p>
          <p className="opacity-60">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <div className="mt-6">
            <button
              className="bg-buttonOrange px-8 py-2 text-lg"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              See Product
            </button>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="" className="home-image" />
        </div>
      </div>
    </div>
  );
};
