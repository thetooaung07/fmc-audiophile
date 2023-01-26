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
  // const { category } = useParams();
  // console.log(category);
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
    <section className="">
      <div className="">
        <div className="">
          <p className="" style={{ letterSpacing: 10 }}>
            New Product
          </p>
          <p className="">XX99 MARK II HEADPHONES</p>
          <p className="">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <div className="">
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
        <picture className="w-full">
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
    <section className="bg-white lg:mt-24 mt-10">
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
    <div className="mx-auto mt-12 flex flex-col justify-between items-center lg:w-full w-3/4 col-span-1 bg-[#F1F1F1] rounded-xl ">
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
    <div className="container-center mt-24">
      <div className="bg-pattern lg:pt-32 xl:pt-12 pt-4 flex flex-col lg:basis-full lg:flex-row lg:justify-center">
        <picture className="mx-auto lg:mx-0">
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
            className="h-60 w-auto lg:h-auto lg:w-auto"
          />
        </picture>

        {/* Duplicate with Main section text */}
        <div className="lg:mx-20 lg:mt-20 text-center lg:text-left mx-10">
          <p className="text-6xl py-8 font-semibold text-white">ZX9 SPEAKER</p>
          <p className="opacity-60">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <div className="mt-6">
            <button
              className="text-white px-10 py-3 lg:px-8 lg:py-2 text-lg uppercase bg-black "
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
      <div className="relative mt-4 rounded-lg overflow-hidden">
        <picture className="mx-auto lg:mx-0">
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
            className="h-full w-full lg:h-auto lg:w-auto"
          />
        </picture>

        <div className="absolute lg:top-1/3 lg:left-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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
      <div className="flex flex-col lg:flex-row  mt-4 gap-4 rounded-lg overflow-hidden">
        <picture className="mx-auto lg:mx-0 flex-1">
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
            className=" w-full h-full rounded-lg"
          />
        </picture>

        <div className="flex-1 bg-[#f1f1f1] rounded-lg flex flex-col justify-center items-center text-center lg:justify-center lg:items-start lg:pl-16 p-6 lg:p-0">
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
    <div className="mt-24 container-center flex flex-col lg:flex-row-reverse basis-full">
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

      <div className="lg:mr-40 lg:w-1/2">
        <h2 className="uppercase leading-10 text-xl my-4 md:my-8 font-bold md:text-4xl md:mx-auto ml-0">
          Bringing you the <span className="text-[#d87d4a]">best</span> audio
          gear
        </h2>

        <p className="opacity-50 font-medium">
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
    <section className="footer bg-black text-white mt-24">
      <div className="container-center relative pt-10 ">
        <div className="absolute w-24 h-[6px] rounded-sm bg-buttonOrange top-0 -ml-1"></div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl">audiophile</h3>

            <div className="space-x-12 justify-end tracking-wider flex">
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
          <div className="flex justify-between items-end pt-10 space-x-20">
            <p className="mt-4 opacity-50 w-1/2">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className="space-x-12 flex">
              <Link className="uppercase w-10 h-10 text-white" to={"/"}>
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

        {/* Mobile View */}

        <div className="flex md:hidden">
          <div className=" flex-1">
            <h3 className="text-3xl">audiophile</h3>
            <p className="mt-4 opacity-50">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className="flex-1 flex justify-between flex-col">
            <div className="h-1/2 mt-12 space-y-1">
              <Link className="uppercase block text-right" to={"/"}>
                Home
              </Link>
              <Link className="uppercase block text-right" to={"/headphones"}>
                headphones
              </Link>
              <Link className="uppercase block text-right" to={"/speakers"}>
                speakers
              </Link>
              <Link className="uppercase block text-right" to={"/earphones"}>
                earphones
              </Link>
            </div>

            <div className="flex justify-end items-center space-x-5">
              <Link className="uppercase flex justify-end items-end " to={"/"}>
                <img src={FacebookIcon} className="text-white " alt="" />
              </Link>
              <Link
                className="uppercase flex justify-end items-end"
                to={"/headphones"}
              >
                <img src={TwitterIcon} alt="" />
              </Link>
              <Link
                className="uppercase flex justify-end items-end"
                to={"/speakers"}
              >
                <img src={InstagramIcon} alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pb-8 opacity-50">
          Copyright 2021. All Rights Reserved
        </div>
      </div>
    </section>
  );
};
