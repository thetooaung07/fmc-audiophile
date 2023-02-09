import { useNavigate } from "react-router-dom";
import {
  CheckoutForm,
  CheckoutSummary,
} from "../components/CheckoutPage_Components";

export const CheckoutPage = () => {
  const navigate = useNavigate();
  return (
    <section className="h-max bg-[#FAFAFA] pb-24">
      <div className="xl:container-center mx-5">
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
        <div className="flex flex-col gap-x-10 gap-y-8 lg:flex-row ">
          <CheckoutForm></CheckoutForm>
          <CheckoutSummary></CheckoutSummary>
        </div>
      </div>
    </section>
  );
};
