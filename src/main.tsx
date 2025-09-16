import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Provider } from "react-redux";
import { store } from "./app/store"; // Make sure this path is correct

// ✅ Load Stripe publishable key from environment variable
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string;

if (!stripePublishableKey) {
  throw new Error("Stripe publishable key is missing. Please set VITE_STRIPE_PUBLISHABLE_KEY in your .env file.");
}

const stripePromise = loadStripe(stripePublishableKey);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </Provider>
  </React.StrictMode>
);