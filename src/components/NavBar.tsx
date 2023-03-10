import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PlusMinusCartBtnType } from "../common/models";
import { useProductContext } from "../context/ProductContext";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { HomePageBodyCard } from "../pages/HomePage";
import { PictureComponent } from "../pages/ProductDetailsPage";
import { TailwindShoppingCartSVG } from "./TailwindShoppingCartSVG";
import Earphones from "/images/shared/desktop/image-earphones.png";
import Headphones from "/images/shared/desktop/image-headphones.png";
import Speakers from "/images/shared/desktop/image-speakers.png";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isActive, setIsActive] = useState(location.pathname);
  const [shopCartExpand, setShopCartExpand] = useState(false);

  // const { cartProduct, setCartProudct } = useProductContext();
  const { cartItems, cartQuantity, removeAllFromCart, getItemQuantity } =
    useShoppingCartContext();

  const { products } = useProductContext();

  useEffect(() => {
    handleActive(location.pathname);
  }, [location]);

  function handleActive(routeName: string) {
    setIsActive(routeName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  function toggleShopCart() {
    setShopCartExpand(!shopCartExpand);
  }
  const navigate = useNavigate();
  return (
    <div className="relative bg-black text-white">
      {/* Backdrop for Menu */}
      <div
        onClick={() => toggleMenu()}
        className={`fixed top-0 left-0 right-0 bottom-0 z-10 h-screen w-screen bg-black opacity-70 transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      />
      <div
        className={` absolute left-0 right-0 top-16 z-20 bg-white pt-20 sm:px-10 ${
          isOpen
            ? "menu-slider grid grid-cols-1 gap-x-4 sm:grid-cols-3"
            : "menu-close"
        } lg:hidden`}
      >
        <HomePageBodyCard
          callBackOnClick={() => setIsOpen(false)}
          styles=" sm:mx-4"
          title="Headphones"
          imageUrl={Headphones}
          goToUrl="/headphones"
        ></HomePageBodyCard>
        <HomePageBodyCard
          callBackOnClick={() => setIsOpen(false)}
          styles="mt-5 sm:mt-0 sm:mx-4"
          title="Speakers"
          imageUrl={Speakers}
          goToUrl="/speakers"
        ></HomePageBodyCard>
        <HomePageBodyCard
          callBackOnClick={() => setIsOpen(false)}
          styles="mt-5 sm:mt-0 sm:mx-4"
          title="Earphones"
          imageUrl={Earphones}
          goToUrl="/earphones"
        ></HomePageBodyCard>
      </div>

      <nav className="xl:container-center mx-4">
        <div
          className="flex items-center justify-between py-4 lg:py-8"
          style={{ borderBottom: "0.5px solid rgba(255, 255, 255, 0.2)" }}
        >
          <div className="block md:hidden">
            <button
              className={`${isOpen && "open"}  menu-btn w-6`}
              onClick={toggleMenu}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
          <Link
            to={"/"}
            className="cursor-pointer select-none text-3xl"
            onClick={() => handleActive("/")}
          >
            audiophile
          </Link>

          <div className="hidden justify-between space-x-12 md:flex">
            <Link
              to={"/"}
              onClick={() => handleActive("/")}
              className={`font-semibold uppercase hover:text-buttonOrange hover:opacity-80 ${
                isActive == "/" && "text-buttonOrange"
              }`}
            >
              Home
            </Link>
            <Link
              to={"/headphones"}
              onClick={() => handleActive("/headphones")}
              className={`font-semibold uppercase hover:text-buttonOrange hover:opacity-80  ${
                isActive == "/headphones" && "text-buttonOrange"
              }`}
            >
              Headphones
            </Link>
            <Link
              to={"/speakers"}
              onClick={() => handleActive("/speakers")}
              className={`font-semibold uppercase hover:text-buttonOrange hover:opacity-80 ${
                isActive == "/speakers" && "text-buttonOrange"
              }`}
            >
              Speakers
            </Link>
            <Link
              to={"/earphones"}
              onClick={() => handleActive("/earphones")}
              className={`font-semibold uppercase hover:text-buttonOrange hover:opacity-80 ${
                isActive == "/earphones" && "text-buttonOrange"
              }`}
            >
              Earphones
            </Link>
          </div>
          <div
            className="justify-cente relative flex h-6 w-6 items-center"
            onClick={() => {
              toggleShopCart();
            }}
          >
            <TailwindShoppingCartSVG></TailwindShoppingCartSVG>

            {cartItems.length > 0 && (
              <div className="absolute -top-3 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-buttonOrange text-xs text-white">
                {cartQuantity}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Backdrop for Shop Cart */}
      <div
        onClick={() => toggleShopCart()}
        className={`fixed top-0 left-0 right-0 bottom-0 z-10 h-screen w-screen bg-black opacity-70 transition-all ${
          shopCartExpand ? "block" : "hidden"
        }`}
      />

      <div
        className={`absolute left-0 right-0 z-30 mx-6 mt-6 h-max min-w-[325px] rounded-xl bg-white p-8 text-black sm:left-[45%] md:left-1/2 lg:left-[60%] lg:right-[10%] ${
          shopCartExpand ? "block" : "hidden"
        } `}
      >
        {cartItems.length <= 0 ? (
          <div className="flex flex-col items-center justify-center">
            <h1 className="pb-8 text-lg font-bold opacity-70">
              Your Cart is Empty
            </h1>

            <TailwindShoppingCartSVG style="w-24 h-24"></TailwindShoppingCartSVG>
          </div>
        ) : (
          <>
            <div className="flex justify-between ">
              <h1 className="text-lg font-bold uppercase">Cart</h1>
              <p
                className="cursor-pointer underline"
                onClick={removeAllFromCart}
              >
                Remove All
              </p>
            </div>
            {cartItems.map((el) => {
              const cartItem = products.find((p) => p.id == el.id);
              if (cartItem == null) return;

              return (
                <div
                  className="my-4 flex items-center justify-between"
                  key={cartItem.id}
                >
                  <div className="flex gap-x-4">
                    <PictureComponent
                      imageSrcSet={{
                        mobile: cartItem.cartImage,
                        tablet: cartItem.cartImage,
                        desktop: cartItem.cartImage,
                      }}
                      imgClassName="w-16 h-16 rounded-xl"
                      pictureClassName=""
                    ></PictureComponent>
                    <div className="flex flex-col items-start justify-center">
                      <h2 className="font-bold">{cartItem.shortName}</h2>
                      <p className="font-bold opacity-60">${cartItem.price}</p>
                    </div>
                  </div>
                  <PlusMinusCartBtn productId={cartItem.id}></PlusMinusCartBtn>
                </div>
              );
            })}
            <div className="mt-8 flex items-center justify-between text-xl">
              <h2 className="text-base font-semibold uppercase opacity-70">
                Total
              </h2>
              <p className="text-xl font-bold">
                $&nbsp;
                {cartItems.reduce((total, cartItem) => {
                  const item = products.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)}
              </p>
            </div>
            <button
              className="mt-4 h-full w-full bg-buttonOrange py-3 text-white hover:bg-accentLight"
              onClick={() => {
                setShopCartExpand(false);
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export const PlusMinusCartBtn = ({
  operatorStyles = "",
  countStyle = "",
  productId,
}: PlusMinusCartBtnType) => {
  const { increaseCartQuantity, getItemQuantity, decreaseCartQuantity } =
    useShoppingCartContext();

  return (
    <div className="flex">
      <div
        className={`rounded-none" flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-lg bg-[#F1F1F1] text-xl text-black opacity-80 hover:bg-lightGray`}
        onClick={() => decreaseCartQuantity(productId)}
      >
        -
      </div>
      <div
        className={`flex w-12 items-center justify-center rounded-lg bg-[#F1F1F1] font-bold text-black ${countStyle}`}
      >
        {getItemQuantity(productId)}
      </div>
      <div
        className={`rounded-none" flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-lg bg-[#F1F1F1] text-xl text-black opacity-80 hover:bg-lightGray`}
        onClick={() => increaseCartQuantity(productId)}
      >
        +
      </div>
    </div>
  );
};
