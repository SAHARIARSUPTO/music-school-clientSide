import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_PK_KEY);
const Payment = () => {
  const location = useLocation();
//   const { totalPrice } = location.state;

  return (
<>
<Helmet>
    <title>Music School - Payment</title>
    </Helmet>
<div className="w-2/4 relative">
      <div className="bg-slate-200 p-20 rounded-2xl">
        <img
          className="mb-5"
          src="https://iwerx.net/image/cache/data//payment//secure-stripe-payment-logo-1000x150.png"
          alt=""
        />
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
</>
  );
};

export default Payment;
