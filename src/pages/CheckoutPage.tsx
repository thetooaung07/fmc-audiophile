import { Children, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { PlusMinusCartBtn } from "../components/NavBar";
import { TailwindShoppingCartSVG } from "../components/TailwindShoppingCartSVG";
import { useProductContext } from "../context/ProductContext";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { PictureComponent } from "./ProductDetailsPage";

export const CheckoutPage = () => {
  const { cartItems, removeAllFromCart } = useShoppingCartContext();
  const { products } = useProductContext();

  const navigate = useNavigate();
  return (
    <section className="h-max bg-gray bg-opacity-20 pb-24">
      <div className="md:container-center mx-5">
        <div className="py-10">
          <p
            className="flex max-h-fit max-w-fit cursor-pointer opacity-60 transition-opacity hover:opacity-100"
            onClick={() => {
              navigate("/");
            }}
          >
            Go Back
          </p>
        </div>
        <div className="flex flex-col gap-x-10 lg:flex-row">
          <div className="rounded-xl bg-white p-8 shadow-sm lg:w-2/3">
            <h2 className="pb-8 text-2xl font-bold uppercase">Checkout</h2>
            {/* form */}
            <form action="">
              <FormElementWrapper>
                <LabelInput label="Name" placeholder="Alex Ward"></LabelInput>
                <LabelInput
                  label="Email Address"
                  placeholder="alexi@gmail.com"
                ></LabelInput>
                <LabelInput
                  label="Phone Number"
                  placeholder="+1 0123-456-789"
                ></LabelInput>
              </FormElementWrapper>

              <FormElementWrapper>
                <LabelInput
                  label="Name"
                  placeholder="Alex Ward"
                  style="md:col-span-12"
                ></LabelInput>
                <LabelInput
                  label="Email Address"
                  placeholder="alexi@gmail.com"
                ></LabelInput>
                <LabelInput
                  label="Email Address"
                  placeholder="alexi@gmail.com"
                ></LabelInput>
                <LabelInput
                  label="Phone Number"
                  placeholder="+1 0123-456-789"
                ></LabelInput>
              </FormElementWrapper>

              <div className="payment-method pb-10">
                <h4 className="pb-4 uppercase text-buttonOrange">
                  Payment Details
                </h4>
                <div className="grid grid-cols-12 gap-x-0 gap-y-2 md:gap-x-6">
                  <div className="col-span-12 md:col-span-6 ">
                    <p>Payment Method</p>
                  </div>
                  <div className="col-span-12 md:col-span-6 ">
                    <RadioInput
                      placeholder="+1 0123-456-789"
                      radioLabel="e-Money"
                    />
                    <RadioInput
                      placeholder="+1 0123-456-789"
                      radioLabel="Cash On Delivery"
                    />
                  </div>
                </div>
              </div>
              <FormElementWrapper>
                <LabelInput label="Name" placeholder="Alex Ward"></LabelInput>
                <LabelInput
                  label="Phone Number"
                  placeholder="+1 0123-456-789"
                ></LabelInput>
              </FormElementWrapper>
            </form>
            {/* End of form */}
          </div>
          <div className="h-max rounded-xl bg-white p-8 shadow-sm lg:w-1/3">
            {/*  */}
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
                        <p className="font-bold opacity-60">
                          ${cartItem.price}
                        </p>
                      </div>
                    </div>
                    <p className="font-bold opacity-60">x{el.quantity}</p>
                  </div>
                );
              })}
            </div>

            {/* Total Grand Total */}
            <div className="flex items-center justify-between text-xl">
              <h2 className="text-base font-semibold uppercase opacity-70">
                Total
              </h2>
              <p className="text-xl font-semibold">
                $&nbsp;
                {cartItems.reduce((total, cartItem) => {
                  const item = products.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)}
              </p>
            </div>
            <div className="flex items-center justify-between text-xl">
              <h2 className="text-base font-semibold uppercase opacity-70">
                Shipping
              </h2>
              <p className="text-xl font-semibold">
                $&nbsp;
                {cartItems.reduce((total, cartItem) => {
                  const item = products.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)}
              </p>
            </div>
            <div className="flex items-center justify-between text-xl">
              <h2 className="text-base font-semibold uppercase opacity-70">
                Vat (Included)
              </h2>
              <p className="text-xl font-semibold">
                $&nbsp;
                {cartItems.reduce((total, cartItem) => {
                  const item = products.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)}
              </p>
            </div>
            <div className="my-4 flex items-center justify-between text-xl">
              <h2 className="text-base font-semibold uppercase opacity-70">
                Grand Total
              </h2>
              <p className="text-xl font-semibold text-buttonOrange">
                $&nbsp;
                {cartItems.reduce((total, cartItem) => {
                  const item = products.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)}
              </p>
            </div>

            <button
              className="mt-4 w-full bg-buttonOrange py-3 uppercase text-white hover:bg-accentLight"
              onClick={() => {}}
            >
              Continue & Pay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

type LabelInputProps = {
  label: string;
  placeholder: string;
  ///override default width [Tailwind CSS]
  style?: string;
};

const LabelInput = ({
  label,
  placeholder,
  style = "md:col-span-6",
}: LabelInputProps) => {
  return (
    <div className={`col-span-12 ${style}`}>
      <label
        htmlFor="first-name"
        className="text-gray-700 block text-sm font-medium"
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        type=""
        name="first-name"
        id="first-name"
        autoComplete="given-name"
        className=" borders mt-2 w-full rounded-lg border border-lightGray px-4 py-4 text-sm placeholder:font-normal focus:border-buttonOrange focus:outline-none focus:ring-1 focus:ring-buttonOrange "
      />
    </div>
  );
};

type RadioInputType = {
  placeholder: string;
  ///override default width [Tailwind CSS]
  style?: string;
  radioLabel: string;
};

const RadioInput = ({ placeholder, style, radioLabel }: RadioInputType) => {
  return (
    <div className={`col-span-12 mb-3 md:col-span-6 ${style}`}>
      <div className="borders flex items-center rounded-lg border border-lightGray px-4 py-4 text-sm placeholder:font-normal focus:border-buttonOrange focus:outline-none focus:ring-1 focus:ring-buttonOrange">
        <input placeholder={placeholder} type="radio" className="scale-150" />
        <span className="mr-4"></span>
        <p>{radioLabel}</p>
      </div>
    </div>
  );
};

type FormElementWrapperType = {
  children: ReactNode;
};

export const FormElementWrapper = ({ children }: FormElementWrapperType) => {
  return (
    <div className="billing-details pb-10">
      <h4 className="pb-4 uppercase text-buttonOrange">Billing Details</h4>
      <div className="grid grid-cols-12 gap-x-0 gap-y-2 md:gap-x-6">
        {children}
      </div>
    </div>
  );
};
