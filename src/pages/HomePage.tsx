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
import { useProductContext } from "../context";
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
  const { products } = useProductContext();

  return (
    <section className="bg-black">
      <div className=" md:mx-auto md:container-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
      whileInView="animate"
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
    >
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
      className={`bg-[#F1F1F1] mx-16 md:mx-0 pb-5 mb-14 rounded-xl flex flex-col justify-between items-center md:flex-1 text-black  ${styles}`}
    >
      <img src={imageUrl} alt="" className="w-36 h-32 -mt-10" />
      <div>
        <p className="">{title}</p>
        <Link
          to={goToUrl}
          className="flex justify-center hover:text-buttonOrange cursor-pointer"
          onClick={callBackOnClick}
        >
          <p className="">Shop </p>
          <p className=""> &gt;</p>
        </Link>
      </div>
    </motion.div>
  );
};

export const MidSection = () => {
  const navigate = useNavigate();
  return (
    <section className={`mx-10 md:mx-auto`}>
      <motion.div
        initial="hidden"
        whileInView="animate"
        animate="show"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <motion.div variants={staggerItem}>
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

        <motion.div variants={staggerItem}>
          <div className="relative my-4 rounded-xl overflow-hidden">
            <div className="absolute top-1/2 transform -translate-y-1/2 left-6">
              <h1 className="text-3xl lg:text-6xl py-4">ZX7 Speaker</h1>
              <SecondaryButton
                onClick={() => {
                  navigate("/speakers/zx7-speaker");
                }}
              ></SecondaryButton>
            </div>
            <picture className="rounded-lg overflow-hidden">
              <source srcSet={SpeakerZx7mobile} media="(max-width: 640px)" />
              <source srcSet={SpeakerZx7tablet} media="(max-width: 1024px)" />
              <img src={SpeakerZx7desktop} alt="" className="md:w-full" />
            </picture>
          </div>
        </motion.div>

        <motion.div variants={staggerItem}>
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
              <h1 className="text-2xl lg:text-6xl mb-6">YX1 EARPHONES</h1>
              <SecondaryButton
                onClick={() => {
                  navigate("/earphones/yx1-earphones");
                }}
              ></SecondaryButton>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
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
