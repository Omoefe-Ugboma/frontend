import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import type { FormEvent } from "react";  // type-only import
import { api } from "../services/api";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Request backend for payment intent
    const { data } = await api.post("/payment/create-payment-intent", {
      amount: 1000, // $10 in cents
      currency: "usd",
    });

    const clientSecret = data.clientSecret;

    if (!stripe || !elements) return;

    // 2. Confirm payment with Stripe.js
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });

    if (result.error) {
      setMessage(result.error.message || "Payment failed");
    } else if (result.paymentIntent?.status === "succeeded") {
      setMessage("✅ Payment successful!");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "20px auto" }}>
      <CardElement />
      <button disabled={loading || !stripe} style={{ marginTop: "10px" }}>
        {loading ? "Processing..." : "Pay $10"}
      </button>
      <p>{message}</p>
    </form>
  );
}
