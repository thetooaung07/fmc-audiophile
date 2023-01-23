import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import HeroImage from "../images/home/desktop/image-hero.jpg";
import Speakers from "../images/shared/desktop/image-earphones.png";
import Headphones from "../images/shared/desktop/image-headphones.png";
import Earphones from "../images/shared/desktop/image-speakers.png";

export const HomePage = () => {
  // const { category } = useParams();
  // console.log(category);
  return (
    <>
      <MainSection></MainSection>
      <HomePageBody></HomePageBody>
      <MainSection></MainSection>
    </>
  );
};

export const MainSection = () => {
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
              className="bg-buttonOrange px-8 py-2 text-lg uppercase"
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

export const HomePageBody = () => {
  return (
    <div className="bg-white mt-36 h-screen">
      <div className="container-center grid md:grid-cols-3 sm:grid-cols-1 items-center gap-4">
        <HomePageBodyCard></HomePageBodyCard>
        <HomePageBodyCard></HomePageBodyCard>
        <HomePageBodyCard></HomePageBodyCard>
      </div>
    </div>
  );
};

export const HomePageBodyCard = () => {
  return (
    <div className="mx-auto mt-14 flex flex-col justify-between items-center w-full col-span-1 bg-[#F1F1F1] rounded-xl">
      <img src={Headphones} alt="" className="-mt-14 w-36 h-32" />
      <div>
        <p className="uppercase font-semibold text-lg">Headphones</p>
        <div className="flex pt-7 pb-5 opacity-60 justify-center items-center">
          <p className="pr-1 uppercase">Shop </p>
          <p className="text-2xl">&gt;</p>
        </div>
      </div>
    </div>
  );
};
