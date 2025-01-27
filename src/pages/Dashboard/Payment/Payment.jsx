import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutFrom from './CheckoutFrom';
// TODO Add Publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div>
            <h2>Payment page</h2>
            <div>
                <Elements stripe={stripePromise}>
                 <CheckoutFrom></CheckoutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;