import { Link } from "react-router-dom";
import FacebookIcon from "/images/shared/facebook.svg";
import InstagramIcon from "/images/shared/instagram.svg";
import TwitterIcon from "/images/shared/twitter.svg";

export const Footer = () => {
  return (
    <section className="bg-black pb-5 text-white">
      <div className="md:container-center mx-8">
        <div className="text-center">
          <div className="relative flex flex-col items-center justify-center pt-8 md:flex-row md:items-center md:justify-between md:pt-0">
            <div className="absolute top-0 h-2 w-32 rounded-lg bg-buttonOrange "></div>
            <h3 className="text-3xl font-bold lg:text-4xl">audiophile</h3>

            <div className="my-8 flex flex-col gap-y-2 text-center text-lg md:flex-row md:gap-x-10">
              <Link
                className="uppercase opacity-60 transition-opacity hover:opacity-100"
                to={"/"}
              >
                Home
              </Link>
              <Link
                className="uppercase opacity-60 transition-opacity hover:opacity-100"
                to={"/headphones"}
              >
                headphones
              </Link>
              <Link
                className="uppercase opacity-60 transition-opacity hover:opacity-100"
                to={"/speakers"}
              >
                speakers
              </Link>
              <Link
                className="uppercase opacity-60 transition-opacity hover:opacity-100"
                to={"/earphones"}
              >
                earphones
              </Link>
            </div>
          </div>

          <p className="w-full text-center opacity-60 md:text-left lg:w-1/2">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
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
