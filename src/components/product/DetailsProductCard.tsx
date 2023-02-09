import { useState } from "react";
import { IProductDetailsCard, PlusMinusBtnType } from "../../common/models";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { PrimaryButton } from "../Buttons";

export const DetailsProductCard = ({
  reverse,
  product,
  btnOnClick,
}: IProductDetailsCard) => {
  const {
    getItemQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromCart,
    cartItems,
  } = useShoppingCartContext();

  const [count, setCount] = useState(1);

  return (
    <div
      className={`flex flex-col gap-x-40 md:mx-0 lg:flex-row  ${
        reverse && "lg:flex-row-reverse"
      }`}
    >
      <picture className="flex-1">
        <source
          srcSet={product.categoryImage.mobile}
          media="(max-width: 640px)"
        />
        <source
          srcSet={product.categoryImage.tablet}
          media="(max-width: 1024px)"
        />
        <img
          src={product.categoryImage.desktop}
          alt=""
          className="h-full w-full"
        />
      </picture>

      <div className="mt-10 flex flex-1 flex-col items-start justify-center text-black lg:mt-0">
        {product.new && (
          <p className="pb-5 opacity-60" style={{ letterSpacing: 10 }}>
            New Product
          </p>
        )}
        <p className="text-3xl font-bold lg:text-4xl">{product.name}</p>
        <p className="w-full py-6 text-left opacity-75 ">
          {product.description}
        </p>

        <h1 className="mb-4 text-2xl">${product.price}</h1>

        <div className="flex gap-4">
          <PlusMinusBtn
            productId={product.id}
            count={count}
            setCount={setCount}
          ></PlusMinusBtn>
          <PrimaryButton
            label={"Add To Cart"}
            onClick={() => {
              increaseCartQuantity(product.id, count);

              // setCartProudct([...cartProduct, product]);
              // open cart
              // Add To Cart  // setCartProudct();
              // Show Product Count in Cart <Change Cart State>
              // Notification
              // if count becomes zero > ask prompt and then remove from the cart
            }}
          ></PrimaryButton>
        </div>

        {cartItems.find((p) => p.id === product.id) && (
          <div className="mt-2">
            <span className="text-buttonOrange">
              {getItemQuantity(product.id)}x
            </span>
            &nbsp; inside the cart
          </div>
        )}
      </div>
    </div>
  );
};

export const PlusMinusBtn = ({
  operatorStyles = "",
  countStyle = "",
  productId,
  count,
  setCount,
}: PlusMinusBtnType) => {
  return (
    <div className="flex">
      <div
        className={`flex w-16 cursor-pointer select-none items-center  justify-center rounded-lg bg-[#F1F1F1] text-xl text-black opacity-80 hover:bg-lightGray ${operatorStyles}`}
        onClick={() => setCount(count - 1)}
      >
        -
      </div>
      <div
        className={`flex w-12 items-center justify-center rounded-lg bg-[#F1F1F1] font-bold text-black ${countStyle}`}
      >
        {count}
      </div>
      <div
        className={`flex w-16 cursor-pointer select-none items-center  justify-center rounded-lg bg-[#F1F1F1] text-xl text-black opacity-80 hover:bg-lightGray ${operatorStyles}`}
        onClick={() => setCount(count + 1)}
      >
        +
      </div>
    </div>
  );
};
