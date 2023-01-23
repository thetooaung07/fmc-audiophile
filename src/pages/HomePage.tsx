import React from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import HeroImage from "../images/home/desktop/image-hero.jpg";
import Earphones from "../images/shared/desktop/image-earphones.png";
import Headphones from "../images/shared/desktop/image-headphones.png";
import Speakers from "../images/shared/desktop/image-speakers.png";

import YX1Earphones from "../images/home/mobile/image-earphones-yx1.jpg";

export const HomePage = () => {
  // const { category } = useParams();
  // console.log(category);
  return (
    <>
      <MainSection></MainSection>
      <HomePageBody></HomePageBody>

      <MidSection></MidSection>
      <BottomSection></BottomSection>

      {/* <div className="h-screen"></div> */}
    </>
  );
};

export const MainSection = () => {
  return (
    <section className="bg-black text-white">
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
    </section>
  );
};

export const HomePageBody = () => {
  return (
    <section className="bg-white mt-32 ">
      <div className="container-center grid md:grid-cols-3 sm:grid-cols-1 items-center gap-4">
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
    </section>
  );
};

type HomePageBodyCard = {
  imageUrl: string;
  title: string;
  goToUrl: string;
};

export const HomePageBodyCard = ({
  imageUrl,
  title,
  goToUrl,
}: HomePageBodyCard) => {
  return (
    <div className="mx-auto mt-12 flex flex-col justify-between items-center w-full col-span-1 bg-[#F1F1F1] rounded-xl">
      <img src={imageUrl} alt="" className="-mt-12 w-36 h-32" />
      <div>
        <p className="uppercase font-semibold text-lg">{title}</p>
        <Link
          to={goToUrl}
          className="flex pb-7 pt-2 opacity-60 justify-center items-center"
        >
          <p className="pr-2 uppercase">Shop </p>
          <p className="text-2xl">&gt;</p>
        </Link>
      </div>
    </div>
  );
};

export const MidSection = () => {
  return (
    <>
      <MidSection1></MidSection1>
    </>
  );
};

export const MidSection1 = () => {
  return (
    <div className="container-center mt-32 ">
      <div className="bg-pattern pt-20 flex flex-row justify-center ">
        <img
          src="../../src/images/home/desktop/image-speaker-zx9.png"
          className="mt-4 w-auto h-full"
          alt=""
        />
        {/* Duplicate with Main section text */}
        <div className="w-96 ml-44">
          <p className="text-6xl py-8 font-semibold text-white">ZX9 SPEAKER</p>
          <p className="opacity-60">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <div className="mt-6">
            <button
              className="text-white px-8 py-2 text-lg uppercase bg-black "
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              See Product
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative mt-4">
        <img
          src={"../../src/images/home/desktop/image-speaker-zx7.jpg"}
          alt=""
          className="w-full rounded-lg"
        />

        <div className="absolute top-1/3 left-40">
          <h1 className="text-3xl font-bold">ZX7 Speaker</h1>
          <div className="mt-6 ">
            <button
              className="text-black px-8 py-2 font-bold uppercase bg-transparent border border-black "
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              See Product
            </button>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-row mt-4 gap-4">
        <img
          src={YX1Earphones}
          className="h-auto w-1/2 object-cover rounded-lg"
          alt=""
        />
        <div className="flex-1 bg-[#f1f1f1] rounded-lg pt-24 px-10">
          <h1 className="text-3xl font-bold">YX1 EARPHONES</h1>
          <div className="mt-6">
            <button
              className="text-black px-8 py-2 font-bold uppercase bg-transparent border border-black "
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              See Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BottomSection = () => {
  return (
    <div className="mt-24 container-center best-gear-bg flex flex-row-reverse items-center">
      <img src="../../src/images/shared/desktop/image-best-gear.jpg" alt="" />

      <div className="md:mr-40">
        <h2 className="uppercase leading-10 text-xl my-4 md:my-8 tracking-ap-2 font-bold md:text-4xl md:leading-11 md:max-w-md md:mx-auto lg:ml-0">
          Bringing you the <span className="text-[#d87d4a]">best</span> audio
          gear
        </h2>

        <p className="opacity-50 font-medium pt-10">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};
