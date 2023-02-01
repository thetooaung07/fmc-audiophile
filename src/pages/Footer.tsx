import { Link } from "react-router-dom";
import { EQUAL_SPACING } from "../utils";
import FacebookIcon from "/images/shared/facebook.svg";
import InstagramIcon from "/images/shared/instagram.svg";
import TwitterIcon from "/images/shared/twitter.svg";

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
