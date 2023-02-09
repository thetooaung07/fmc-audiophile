import { Children, ReactNode, useState } from "react";
import "../App.css";
import { PlusMinusCartBtn } from "../components/NavBar";
import { TailwindShoppingCartSVG } from "../components/TailwindShoppingCartSVG";
import { useProductContext } from "../context/ProductContext";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { PictureComponent } from "../pages/ProductDetailsPage";
import CashOnDeliverySVG from "/images/checkout/icon-cash-on-delivery.svg";

type LabelInputProps = {
  label: string;
  placeholder: string;
  ///override default width [Tailwind CSS]
  style?: string;
};

export const LabelInput = ({
  label,
  placeholder,
  style = "md:col-span-6",
}: LabelInputProps) => {
  return (
    <div className={`col-span-12 ${style}`}>
      <label
        htmlFor="first-name"
        className="text-gray-700 block text-sm font-medium opacity-80"
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        type=""
        name="first-name"
        id="first-name"
        autoComplete="given-name"
        className="borders mt-2 w-full rounded-lg border border-lightGray px-4 py-4 text-sm transition duration-300 placeholder:font-normal focus:border-buttonOrange focus:outline-none focus:ring-1 focus:ring-buttonOrange "
      />
    </div>
  );
};

type RadioInputType = {
  isSelected?: boolean;
  placeholder: string;
  ///override default width [Tailwind CSS]
  style?: string;
  onChange: () => void;
  radioLabel: string;
};

export const RadioInput = ({
  isSelected = false,
  placeholder,
  style,
  radioLabel,
  onChange,
}: RadioInputType) => {
  return (
    <div
      className={`col-span-12 mb-3 md:col-span-6 ${style} rounded-lg transition ${
        isSelected &&
        "border-buttonOrange outline-none ring-1 ring-buttonOrange transition "
      }`}
      onClick={onChange}
    >
      <div className="borders flex items-center rounded-lg border border-lightGray px-4 py-4 text-sm transition placeholder:font-normal">
        <input
          onChange={onChange}
          placeholder={placeholder}
          type="radio"
          className="scale-150 checked:accent-buttonOrange"
          checked={isSelected}
        />
        <span className="mr-4"></span>
        <p>{radioLabel}</p>
      </div>
    </div>
  );
};

type FormElementWrapperType = {
  label: string;
  children: ReactNode;
};

export const FormElementWrapper = ({
  children,
  label,
}: FormElementWrapperType) => {
  const clxName = label.toLowerCase().split(" ").join("-");

  return (
    <div className={`${clxName} pb-10 font-semibold`}>
      {label !== "" && (
        <h4 className="pb-4 uppercase text-buttonOrange">{label}</h4>
      )}
      <div className="grid grid-cols-12 gap-x-0 gap-y-2 md:gap-x-6">
        {children}
      </div>
    </div>
  );
};

export const CheckoutForm = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="rounded-xl bg-white p-8 shadow-md lg:w-2/3">
      <h2 className="pb-8 text-2xl font-bold uppercase">Checkout</h2>

      <form action="">
        {/* Billing Details */}
        <FormElementWrapper label="Billing Details">
          <LabelInput label="Name" placeholder="Alex Ward"></LabelInput>
          <LabelInput
            label="Email Address"
            placeholder="alexi@gmail.com"
          ></LabelInput>
          <LabelInput
            label="Phone Number"
            placeholder="+95 0123-456-789"
          ></LabelInput>
        </FormElementWrapper>
        {/* Shipping Info */}
        <FormElementWrapper label="Shipping Info">
          <LabelInput
            label="Your Address"
            placeholder="1113 abcd Street"
            style="md:col-span-12"
          ></LabelInput>
          <LabelInput label="Zip Code" placeholder="111000"></LabelInput>
          <LabelInput label="City" placeholder="Yangon"></LabelInput>
          <LabelInput label="Country" placeholder="Myanmar"></LabelInput>
        </FormElementWrapper>

        {/* Payment Details */}
        <div className="payment-method pb-10">
          <h4 className="pb-4 uppercase text-buttonOrange">Payment Details</h4>
          <div className="grid grid-cols-12 gap-x-0 gap-y-2 md:gap-x-6">
            <div className="col-span-12 md:col-span-6 ">
              <p className="text-sm">Payment Method</p>
            </div>
            <div className="col-span-12 md:col-span-6 ">
              <RadioInput
                onChange={() => setSelected(1)}
                isSelected={selected === 1 ? true : false}
                placeholder="+1 0123-456-789"
                radioLabel="e-Money"
              />
              <RadioInput
                onChange={() => setSelected(2)}
                isSelected={selected === 2 ? true : false}
                placeholder="+1 0123-456-789"
                radioLabel="Cash On Delivery"
              />
            </div>
          </div>
        </div>
        {selected === 1 ? (
          <FormElementWrapper label="">
            <LabelInput
              label="e-Money Number"
              placeholder="123456789"
            ></LabelInput>
            <LabelInput label="e-Money Pin" placeholder="1234"></LabelInput>
          </FormElementWrapper>
        ) : selected === 2 ? (
          <CashOnDelivery></CashOnDelivery>
        ) : null}
      </form>
    </div>
  );
};

export const CashOnDelivery = () => {
  return (
    <div className="flex space-x-7">
      <img src={CashOnDeliverySVG} alt="cash on delivery" />

      <p className="opacity-70">
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </p>
    </div>
  );
};

export const CheckoutSummary = () => {
  const { cartItems } = useShoppingCartContext();
  const { products } = useProductContext();

  const totalCartItems = cartItems.reduce((total, cartItem) => {
    const item = products.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const vat = 2699.4;
  const shipping = 50;
  return (
    <div className="h-max rounded-xl bg-white p-8 shadow-sm lg:w-1/3">
      {/*  */}

      {cartItems.length <= 0 ? (
        <div className="flex flex-col items-center justify-center">
          <h1 className="pb-8 text-lg font-bold opacity-70">
            Your Cart is Empty
          </h1>

          <TailwindShoppingCartSVG style="w-24 h-24"></TailwindShoppingCartSVG>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold uppercase">Summary</h2>
          <div className="py-4">
            {cartItems.map((el) => {
              const cartItem = products.find((p) => p.id == el.id);
              if (cartItem == null) return;
              return (
                <div
                  className="my-4 flex items-center justify-between"
                  key={cartItem.id}
                >
                  <div className="flex gap-x-6">
                    <PictureComponent
                      imageSrcSet={{
                        mobile: cartItem.cartImage,
                        tablet: cartItem.cartImage,
                        desktop: cartItem.cartImage,
                      }}
                      imgClassName="w-16 h-16 rounded-lg"
                      pictureClassName=""
                    ></PictureComponent>
                    <div className="flex flex-col items-start justify-center rounded">
                      <h2 className="font-bold">{cartItem.shortName}</h2>
                      <p className="font-bold opacity-60">${cartItem.price}</p>
                    </div>
                  </div>
                  <p className="font-bold opacity-60">x{el.quantity}</p>
                </div>
              );
            })}
          </div>
          {/* Total Grand Total */}
          <div className="flex items-center justify-between text-lg">
            <h2 className="text-base font-semibold uppercase opacity-70">
              Total
            </h2>
            <p className="text-lg font-semibold opacity-80">
              $&nbsp;
              {cartItems.reduce((total, cartItem) => {
                const item = products.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)}
            </p>
          </div>
          <div className="flex items-center justify-between text-lg">
            <h2 className="text-base font-semibold uppercase opacity-70">
              Shipping
            </h2>
            <p className="text-lg font-semibold opacity-80">
              $&nbsp;{shipping}
            </p>
          </div>
          <div className="flex items-center justify-between text-lg">
            <h2 className="text-base font-semibold uppercase opacity-70">
              Vat (Included)
            </h2>
            <p className="text-lg font-semibold opacity-80">$&nbsp;{vat}</p>
          </div>
          <div className="my-4 flex items-center justify-between text-lg">
            <h2 className="text-base font-semibold uppercase opacity-70">
              Grand Total
            </h2>
            <p className="text-lg font-semibold text-buttonOrange opacity-80">
              $&nbsp;
              {totalCartItems + vat + shipping}
            </p>
          </div>
          <button
            className="mt-4 w-full bg-buttonOrange py-3 font-bold uppercase text-white hover:bg-accentLight"
            onClick={() => {}}
          >
            Continue & Pay
          </button>
        </div>
      )}
    </div>
  );
};
