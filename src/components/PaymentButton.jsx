import React, { useState } from 'react';
import axios from 'axios';
import { FaDollarSign } from 'react-icons/fa';

const PaymentButton = ({ onPaymentSuccess, onPaymentError }) => {
  const [message, setMessage] = useState('');

  const handleProceedToPayment = async () => {
    setMessage('Redirecting to payment...');
    try {
      const response = await axios.post('/.netlify/functions/create-checkout-session', {
        amount: 100,
        currency: 'usd',
      });
      window.location.href = response.data.sessionId;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      setMessage('Payment failed. Please try again.');
      if (onPaymentError) {
        onPaymentError('Payment failed. Please try again.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <button
        onClick={handleProceedToPayment}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded w-full hover:bg-green-600 shadow-md flex items-center justify-center gap-2 transition duration-200"
      >
        <FaDollarSign className="text-lg" />
        Proceed to Payment (USD 1)
      </button>

      {message && (
        <p
          className="text-sm mt-2"
          style={{ color: message.includes('failed') ? '#e53935' : '#2e7d32' }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default PaymentButton;
