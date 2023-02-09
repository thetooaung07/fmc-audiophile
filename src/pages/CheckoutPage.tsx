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
    <section className="h-max bg-gray bg-opacity-30 pb-24">
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
        <div className="flex gap-x-10">
          <div className="w-2/3 rounded-xl bg-white p-8">
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
                      label="Phone Number"
                      placeholder="+1 0123-456-789"
                      radioLabel="e-Money"
                    />
                    <RadioInput
                      label="Phone Number"
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
          <div className="w-1/3 bg-white p-8">
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

            {/*  */}
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
  label: string;
  placeholder: string;
  ///override default width [Tailwind CSS]
  style?: string;
  radioLabel: string;
};

const RadioInput = ({
  label,
  placeholder,
  style,
  radioLabel,
}: RadioInputType) => {
  return (
    <div className={`col-span-12 md:col-span-6  ${style}`}>
      <label
        htmlFor="first-name"
        className="text-gray-700 block text-sm font-medium"
      >
        {label}
      </label>
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
