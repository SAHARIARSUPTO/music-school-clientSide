import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardNumberFocused, setCardNumberFocused] = useState(false);
  const [cardError, setCardError] = useState('');

  const handleCardNumberFocus = (e) => {
    setCardNumberFocused(e.focus);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError('');
      console.log('payment method', paymentMethod);

      // Make the POST API request to your server-side API
      try {
        const response = await fetch('/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            price: totalPrice
          })
        });

        if (response.ok) {
          // Handle successful payment
          console.log('Payment successful');
        } else {
          // Handle payment error
          console.log('Payment error');
        }
      } catch (error) {
        // Handle network or server errors
        console.log('Error:', error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 w-full">
          <label className="block w-full mb-1" htmlFor="cardNumber">
            Card Number
          </label>
          <div
            className={`w-full border ${
              cardNumberFocused ? "ring-2 bg-white text-black" : ""
            } rounded-md p-3`}
            style={{ border: "1px solid black" }}
          >
            <CardElement
              id="cardNumber"
              className=" outline-none bg-transparent text-xl"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
              onFocus={() => handleCardNumberFocus({ focus: true })}
              onBlur={() => handleCardNumberFocus({ focus: false })}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={!stripe}
          className="btn bg-indigo-500 text-black px-4 py-2 rounded-md w-full hover:bg-lime-400"
        >
          Pay
        </button>
      </form>
      {cardError && <div className="alert alert-error mt-5">{cardError}</div>}
    </>
  );
};

export default CheckOutForm;
