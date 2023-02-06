import { Link, useNavigate, useParams } from "react-router-dom";
import "../App.css";
import HeroImageDesktop from "/images/home/desktop/image-hero.jpg";
import HeroImageMobile from "/images/home/mobile/image-hero.jpg";
import HeroImageTablet from "/images/home/tablet/image-hero.jpg";
import Earphones from "/images/shared/desktop/image-earphones.png";
import Headphones from "/images/shared/desktop/image-headphones.png";
import Speakers from "/images/shared/desktop/image-speakers.png";

import ImageBestGeardesktop from "/images/shared/desktop/image-best-gear.jpg";
import ImageBestGearmobile from "/images/shared/mobile/image-best-gear.jpg";
import ImageBestGeartablet from "/images/shared/tablet/image-best-gear.jpg";

import EarphoneYx1desktop from "/images/home/desktop/image-earphones-yx1.jpg";
import EarphoneYx1mobile from "/images/home/mobile/image-earphones-yx1.jpg";
import EarphoneYx1tablet from "/images/home/tablet/image-earphones-yx1.jpg";

import SpeakerZx7desktop from "/images/home/desktop/image-speaker-zx7.jpg";
import SpeakerZx7mobile from "/images/home/mobile/image-speaker-zx7.jpg";
import SpeakerZx7tablet from "/images/home/tablet/image-speaker-zx7.jpg";

import { HomePageBodyCardType } from "../common/models";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { useProductContext } from "../context/ProductContext";
import { EQUAL_SPACING } from "../utils";
import SpeakerZx9desktop from "/images/home/desktop/image-speaker-zx9.png";
import SpeakerZx9mobile from "/images/home/mobile/image-speaker-zx9.png";
import SpeakerZx9tablet from "/images/home/tablet/image-speaker-zx9.png";

import { motion } from "framer-motion";

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
      <div className=" md:container-center relative md:mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute-center lg:container-center absolute flex w-full flex-col items-center justify-between text-white md:left-0 md:translate-x-0 lg:w-2/3 lg:max-w-lg lg:items-start">
            <p className="opacity-60" style={{ letterSpacing: 10 }}>
              New Product
            </p>
            <p className="lg:text6xl mb-5 mt-6 text-center text-5xl font-bold tracking-wider lg:text-left">
              XX99 MARK II HEADPHONES
            </p>
            <p className="mb-4 w-2/3 py-4 text-center opacity-60 lg:text-left">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <PrimaryButton
              onClick={() => {
                navigate(`/headphones/xx99-mark-two-headphones`);
              }}
            ></PrimaryButton>
          </div>
        </motion.div>
        <picture className="">
          <source srcSet={HeroImageMobile} media="(max-width: 640px)" />
          <source srcSet={HeroImageTablet} media="(max-width: 1024px)" />
          <img src={HeroImageDesktop} alt="" className="" />
        </picture>
      </div>
    </section>
  );
};

const staggerContainer = {
  hidden: { y: "4rem", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { staggerChildren: 0.2, ease: "easeInOut", duration: 1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const HomePageBody = () => {
  return (
    <motion.div
      variants={staggerContainer}
      whileInView="show"
      initial="hidden"
      viewport={{ once: true }}
    >
      <section
        className={`mt-24 flex flex-col gap-12 md:mx-auto md:flex-row ${EQUAL_SPACING} mb-10`}
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
    </motion.div>
  );
};

export const HomePageBodyCard = ({
  imageUrl,
  title,
  goToUrl,
  styles,
  callBackOnClick,
}: HomePageBodyCardType) => {
  return (
    <motion.div
      variants={staggerItem}
      className={`mx-16 mb-14 flex flex-col items-center justify-between rounded-xl bg-[#F1F1F1] pb-5 text-black md:mx-0 md:flex-1  ${styles}`}
    >
      <img src={imageUrl} alt="" className="-mt-10 h-32 w-36" />
      <div>
        <p className="">{title}</p>
        <Link
          to={goToUrl}
          className="flex cursor-pointer justify-center hover:text-buttonOrange"
          onClick={callBackOnClick}
        >
          <p className="">Shop </p>
          <p className=""> &gt;</p>
        </Link>
      </div>
    </motion.div>
  );
};

const staggerContainerMidSection = {
  hidden: { y: "4rem", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { staggerChildren: 0.2, ease: "easeInOut", duration: 1 },
  },
};

export const MidSection = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      variants={staggerContainerMidSection}
      whileInView="show"
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      className={`mx-10 md:mx-auto`}
    >
      <motion.div variants={staggerContainerMidSection}>
        <div className="bg-pattern flex flex-col items-center justify-center lg:flex-row ">
          <picture className="">
            <source srcSet={SpeakerZx9mobile} media="(max-width: 640px)" />
            <source srcSet={SpeakerZx9tablet} media="(max-width: 1024px)" />
            <img
              src={SpeakerZx9desktop}
              alt=""
              className="mx-auto mt-4 h-1/2 w-1/2 lg:mt-20 lg:-mb-2"
            />
          </picture>
          {/* Duplicate with Main section text */}
          <div className="flex flex-col items-center justify-center py-5 text-white lg:items-start ">
            <p className="text-3xl lg:text-6xl">ZX9 SPEAKER</p>
            <p className="w-1/2 py-6 text-center opacity-75 lg:w-2/3 lg:text-left">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <SecondaryButton
              inverse
              onClick={() => {
                navigate("/speakers/zx9-speaker");
              }}
            ></SecondaryButton>
          </div>
        </div>
      </motion.div>

      {/* Second Section */}

      <motion.div variants={staggerContainerMidSection}>
        <div className="relative my-4 overflow-hidden rounded-xl">
          <div className="absolute top-1/2 left-6 -translate-y-1/2 transform">
            <h1 className="py-4 text-3xl lg:text-6xl">ZX7 Speaker</h1>
            <SecondaryButton
              onClick={() => {
                navigate("/speakers/zx7-speaker");
              }}
            ></SecondaryButton>
          </div>
          <picture className="overflow-hidden rounded-lg">
            <source srcSet={SpeakerZx7mobile} media="(max-width: 640px)" />
            <source srcSet={SpeakerZx7tablet} media="(max-width: 1024px)" />
            <img src={SpeakerZx7desktop} alt="" className="md:w-full" />
          </picture>
        </div>
      </motion.div>

      <motion.div variants={staggerContainerMidSection}>
        {/* Third Section */}
        <div className="grid grid-cols-1 gap-4 overflow-hidden rounded-xl sm:grid-cols-2">
          <picture className="">
            <source srcSet={EarphoneYx1mobile} media="(max-width: 640px)" />
            <source srcSet={EarphoneYx1tablet} media="(max-width: 1024px)" />
            <img
              src={EarphoneYx1desktop}
              alt=""
              className="h-60 w-full rounded-xl lg:h-full"
            />
          </picture>

          <div className="flex w-full flex-col items-center justify-center rounded-xl bg-[#F1F1F1] px-5 py-12 lg:items-start lg:px-10">
            <h1 className="mb-6 text-2xl lg:text-6xl">YX1 EARPHONES</h1>
            <SecondaryButton
              onClick={() => {
                navigate("/earphones/yx1-earphones");
              }}
            ></SecondaryButton>
          </div>
        </div>
      </motion.div>
    </motion.section>
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
          className="h-auto w-full lg:pl-20"
          alt=""
        />
      </picture>
      <div className="lg:flex-1">
        <h2 className="py-8 text-center text-4xl uppercase lg:text-left">
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
