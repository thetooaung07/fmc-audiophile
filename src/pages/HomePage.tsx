import { Link, useNavigate, useParams } from "react-router-dom";
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

import ImageBestGeardesktop from "../../src/images/shared/desktop/image-best-gear.jpg";
import ImageBestGearmobile from "../../src/images/shared/mobile/image-best-gear.jpg";
import ImageBestGeartablet from "../../src/images/shared/tablet/image-best-gear.jpg";

import EarphoneYx1desktop from "../../src/images/home/desktop/image-earphones-yx1.jpg";
import EarphoneYx1mobile from "../../src/images/home/mobile/image-earphones-yx1.jpg";
import EarphoneYx1tablet from "../../src/images/home/tablet/image-earphones-yx1.jpg";

import SpeakerZx7desktop from "../../src/images/home/desktop/image-speaker-zx7.jpg";
import SpeakerZx7mobile from "../../src/images/home/mobile/image-speaker-zx7.jpg";
import SpeakerZx7tablet from "../../src/images/home/tablet/image-speaker-zx7.jpg";

import SpeakerZx9desktop from "../../src/images/home/desktop/image-speaker-zx9.png";
import SpeakerZx9mobile from "../../src/images/home/mobile/image-speaker-zx9.png";
import SpeakerZx9tablet from "../../src/images/home/tablet/image-speaker-zx9.png";
import { EQUAL_SPACING } from "../utils";

export const HomePage = () => {
  return (
    <>
      <MainSection></MainSection>

      <div className="md:container-center">
        <HomePageBody></HomePageBody>
        <MidSection></MidSection>
        <BottomSection></BottomSection>
      </div>
    </>
  );
};

export const MainSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black">
      <div className=" md:mx-auto md:container-center relative">
        <div className="absolute absolute-center md:left-0 w-full lg:w-2/3 lg:max-w-lg text-white flex flex-col justify-between items-center lg:items-start md:translate-x-0 lg:container-center">
          <p className="opacity-60" style={{ letterSpacing: 10 }}>
            New Product
          </p>
          <p className="text-5xl text-center lg:text-left font-bold tracking-wider lg:text6xl mb-5 mt-6">
            XX99 MARK II HEADPHONES
          </p>
          <p className="text-center lg:text-left py-4 w-2/3 mb-4 opacity-60">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <div className="px-5 py-3 text-white bg-buttonOrange border-none">
            <button
              className=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/speakers/details/abcd");
              }}
            >
              See Product
            </button>
          </div>
        </div>
        <picture className="">
          <source srcSet={HeroImageMobile} media="(max-width: 640px)" />
          <source srcSet={HeroImageTablet} media="(max-width: 1024px)" />
          <img src={HeroImageDesktop} alt="" className="" />
        </picture>
      </div>
    </section>
  );
};

export const HomePageBody = () => {
  return (
    <section
      className={`flex flex-col md:flex-row mt-24 gap-12 md:mx-auto ${EQUAL_SPACING} mb-10`}
    >
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
    <div className="bg-[#F1F1F1] mx-16 md:mx-0 pb-5 mb-10 rounded-xl flex flex-col justify-between items-center md:flex-1">
      <img src={imageUrl} alt="" className="w-36 h-32 -mt-10" />
      <div>
        <p className="">{title}</p>
        <Link to={goToUrl} className="flex justify-center">
          <p className="">Shop </p>
          <p className=""> &gt;</p>
        </Link>
      </div>
    </div>
  );
};

export const MidSection = () => {
  return (
    <div className={`mx-10  md:mx-auto`}>
      <div className="bg-pattern flex justify-center items-center flex-col lg:flex-row ">
        <picture className="">
          <source srcSet={SpeakerZx9mobile} media="(max-width: 640px)" />
          <source srcSet={SpeakerZx9tablet} media="(max-width: 1024px)" />
          <img
            src={SpeakerZx9desktop}
            alt=""
            className="w-1/2 h-1/2 mx-auto mt-4 lg:mt-20 lg:-mb-2"
          />
        </picture>

        {/* Duplicate with Main section text */}
        <div className="py-5 flex flex-col justify-center items-center lg:items-start text-white ">
          <p className="text-3xl lg:text-6xl">ZX9 SPEAKER</p>
          <p className="text-center lg:text-left opacity-75 py-6 lg:w-2/3 w-1/2">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <div className="">
            <button
              className="trans-hover-inverse"
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
      <div className="relative my-4 rounded-xl overflow-hidden">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-6">
          <h1 className="text-3xl lg:text-6xl py-4">ZX7 Speaker</h1>
          <div className="">
            <button
              className="trans-hover"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              See Product
            </button>
          </div>
        </div>
        <picture className="rounded-lg overflow-hidden">
          <source srcSet={SpeakerZx7mobile} media="(max-width: 640px)" />
          <source srcSet={SpeakerZx7tablet} media="(max-width: 1024px)" />
          <img src={SpeakerZx7desktop} alt="" className="md:w-full" />
        </picture>
      </div>

      {/* Third Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl overflow-hidden">
        <picture className="">
          <source srcSet={EarphoneYx1mobile} media="(max-width: 640px)" />
          <source srcSet={EarphoneYx1tablet} media="(max-width: 1024px)" />
          <img
            src={EarphoneYx1desktop}
            alt=""
            className="w-full h-60 rounded-xl lg:h-full"
          />
        </picture>

        <div className="w-full px-5 lg:px-10 bg-[#F1F1F1] rounded-xl flex flex-col justify-center py-12 lg:items-start items-center">
          <h1 className="text-2xl lg:text-6xl">YX1 EARPHONES</h1>
          <div className="mt-6">
            <button
              className="trans-hover"
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
    <div
      className={`${EQUAL_SPACING} mx-8 lg:mx-auto lg:flex lg:flex-row-reverse lg:items-center lg:gap-8`}
    >
      <picture className="lg:flex-1">
        <source media="(max-width: 640px)" srcSet={ImageBestGearmobile} />
        <source media="(max-width: 1024px)" srcSet={ImageBestGeartablet} />
        <img
          src={ImageBestGeardesktop}
          className="w-full h-auto lg:pl-20"
          alt=""
        />
      </picture>
      <div className="lg:flex-1">
        <h2 className="uppercase text-center lg:text-left text-4xl py-8">
          Bringing you the <span className="text-[#d87d4a]">best</span> audio
          gear
        </h2>

        <p className="opacity-60">
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

export const Footer = () => {
  return (
    <section className={`bg-black text-white pb-5 ${EQUAL_SPACING}`}>
      <div className="mx-8 md:container-center">
        <div className="text-center">
          <div className="flex flex-col justify-center items-center relative pt-8 md:pt-0 md:flex-row md:justify-between md:items-center">
            <div className="absolute w-32 h-2 top-0 bg-buttonOrange rounded-lg "></div>
            <h3 className="font-bold text-3xl lg:text-4xl">audiophile</h3>

            <div className="my-8 flex flex-col text-center gap-y-2 text-lg md:flex-row md:gap-x-10">
              <Link
                className="uppercase transition-opacity opacity-60 hover:opacity-100"
                to={"/"}
              >
                Home
              </Link>
              <Link
                className="uppercase transition-opacity opacity-60 hover:opacity-100"
                to={"/headphones"}
              >
                headphones
              </Link>
              <Link
                className="uppercase transition-opacity opacity-60 hover:opacity-100"
                to={"/speakers"}
              >
                speakers
              </Link>
              <Link
                className="uppercase transition-opacity opacity-60 hover:opacity-100"
                to={"/earphones"}
              >
                earphones
              </Link>
            </div>
          </div>

          <p className="w-full opacity-60 text-center md:text-left lg:w-1/2">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="my-8 text-center opacity-60 md:text-left">
              Copyright 2021. All Rights Reserved
            </div>

            <div className="flex justify-center gap-x-8">
              <Link className="uppercase text-white" to={"/"}>
                <img
                  src={FacebookIcon}
                  className="opacity-60 hover:opacity-100 "
                  alt=""
                />
              </Link>
              <Link className="uppercase" to={"/headphones"}>
                <img
                  src={TwitterIcon}
                  alt=""
                  className="opacity-60 hover:opacity-100"
                />
              </Link>
              <Link className="uppercase" to={"/speakers"}>
                <img
                  src={InstagramIcon}
                  alt=""
                  className="opacity-60 hover:opacity-100"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
