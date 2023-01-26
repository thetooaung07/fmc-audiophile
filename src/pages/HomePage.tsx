import React from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import HeroImageDesktop from "../images/home/desktop/image-hero.jpg";
import HeroImageMobile from "../images/home/mobile/image-hero.jpg";
import HeroImageTablet from "../images/home/tablet/image-hero.jpg";
import Earphones from "../images/shared/desktop/image-earphones.png";
import Headphones from "../images/shared/desktop/image-headphones.png";
import Speakers from "../images/shared/desktop/image-speakers.png";
import FacebookIcon from "../images/shared/facebook.svg";
import InstagramIcon from "../images/shared/instagram.svg";
import TwitterIcon from "../images/shared/twitter.svg";

export const HomePage = () => {
  return (
    <>
      <MainSection></MainSection>
      <HomePageBody></HomePageBody>

      <MidSection></MidSection>
      <BottomSection></BottomSection>
      <Footer></Footer>
    </>
  );
};

export const MainSection = () => {
  return (
    <section>
      <div className="relative">
        <div className="absolute absolute-center w-full h-1/3 text-white flex flex-col justify-between items-center">
          <p className="opacity-60" style={{ letterSpacing: 10 }}>
            New Product
          </p>
          <p className="text-3xl lg:text6xl">XX99 MARK II HEADPHONES</p>
          <p className="text-center">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <div className="bg-white text-black py-2 px-4">
            <button
              className=""
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              See Product
            </button>
          </div>
        </div>
        <picture className="">
          <source srcSet={HeroImageMobile} media="(max-width: 480px)" />
          <source srcSet={HeroImageTablet} media="(max-width: 976px)" />
          <img src={HeroImageDesktop} alt="" className="" />
        </picture>
      </div>
    </section>
  );
};

export const HomePageBody = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16">
      <div className="">
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
    <div className="bg-[#F1F1F1] mx-16 pb-5 mb-20 rounded-xl flex flex-col justify-between items-center">
      <img src={imageUrl} alt="" className="w-36 h-32 -mt-10" />
      <div>
        <p className="">{title}</p>
        <Link to={goToUrl} className="flex justify-center">
          <p className="">Shop </p>
          <p className="">&gt;</p>
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
    <div className="mx-8">
      <div className="bg-pattern flex justify-center items-center flex-col">
        <picture className="">
          <source
            srcSet={"../../src/images/home/mobile/image-speaker-zx9.png"}
            media="(max-width: 480px)"
          />
          <source
            srcSet={"../../src/images/home/tablet/image-speaker-zx9.png"}
            media="(max-width: 976px)"
          />
          <img
            src={"../../src/images/home/desktop/image-speaker-zx9.png"}
            alt=""
            className="w-1/2 h-1/2 mx-auto mt-4"
          />
        </picture>

        {/* Duplicate with Main section text */}
        <div className="py-5 flex flex-col justify-center items-center">
          <p className="text-3xl lg:text-6xl">ZX9 SPEAKER</p>
          <p className="text-center opacity-75 py-4">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <div className="">
            <button
              className="px-4 py-2 bg-red-600"
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
      <div className="relative">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-6">
          <h1 className="text-3xl lg:text-6xl py-4">ZX7 Speaker</h1>
          <div className="">
            <button
              className="px-4 py-2 bg-red-600"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              See Product
            </button>
          </div>
        </div>
        <picture className="">
          <source
            srcSet={"../../src/images/home/mobile/image-speaker-zx7.jpg"}
            media="(max-width: 480px)"
          />
          <source
            srcSet={"../../src/images/home/tablet/image-speaker-zx7.jpg"}
            media="(max-width: 976px)"
          />
          <img
            src={"../../src/images/home/desktop/image-speaker-zx7.jpg"}
            alt=""
            className=""
          />
        </picture>
      </div>

      {/* Third Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <picture className="">
          <source
            srcSet={"../../src/images/home/mobile/image-earphones-yx1.jpg"}
            media="(max-width: 480px)"
          />
          <source
            srcSet={"../../src/images/home/tablet/image-earphones-yx1.jpg"}
            media="(max-width: 976px)"
          />
          <img
            src={"../../src/images/home/desktop/image-earphones-yx1.jpg"}
            alt=""
            className="w-full lg:w-1/2 h-60"
          />
        </picture>

        <div className="w-full lg:w-1/2 py-16 px-5 lg:px-10">
          <h1 className="text-2xl lg:text-6xl">YX1 EARPHONES</h1>
          <div className="mt-6">
            <button
              className="px-4 py-2 bg-red-600 text-white"
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
    <div className="">
      <picture>
        <source
          media="(max-width: 480px)"
          srcSet={"../../src/images/shared/mobile/image-best-gear.jpg"}
        />
        <source
          media="(max-width: 976px)"
          srcSet={"../../src/images/shared/tablet/image-best-gear.jpg"}
        />
        <img src="../../src/images/shared/desktop/image-best-gear.jpg" alt="" />
      </picture>

      <div className="">
        <h2 className="">
          Bringing you the <span className="text-[#d87d4a]">best</span> audio
          gear
        </h2>

        <p className="">
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

const Footer = () => {
  return (
    <section className="">
      <div className="">
        <div className=""></div>

        <div className="">
          <div className="">
            <h3 className="">audiophile</h3>

            <div className="">
              <Link className="uppercase" to={"/"}>
                Home
              </Link>
              <Link className="uppercase" to={"/headphones"}>
                headphones
              </Link>
              <Link className="uppercase" to={"/speakers"}>
                speakers
              </Link>
              <Link className="uppercase" to={"/earphones"}>
                earphones
              </Link>
            </div>
          </div>
          <div className="">
            <p className="">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className="">
              <Link className="uppercase text-white" to={"/"}>
                <img src={FacebookIcon} className="text-white " alt="" />
              </Link>
              <Link className="uppercase" to={"/headphones"}>
                <img src={TwitterIcon} alt="" />
              </Link>
              <Link className="uppercase" to={"/speakers"}>
                <img src={InstagramIcon} alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div className="">Copyright 2021. All Rights Reserved</div>
      </div>
    </section>
  );
};
