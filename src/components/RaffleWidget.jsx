import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaymentButton from './PaymentButton';
import { MdConfirmationNumber } from 'react-icons/md';

const RaffleWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ticketCount, setTicketCount] = useState(0);
  const [raffleMessage, setRaffleMessage] = useState('');
  const userId = 'user_123';

  const fetchTickets = async () => {
    try {
      const response = await axios.get(`/.netlify/functions/raffle-status?userId=${userId}`);
      setTicketCount(response.data.tickets);
      setRaffleMessage('');
    } catch (error) {
      console.error('Error fetching tickets:', error);
      setRaffleMessage('Error loading tickets.');
    }
  };

  useEffect(() => {
    fetchTickets();
  }, [isExpanded]);

  const handleJoinRaffle = async () => {
    setRaffleMessage('Processing...');
    try {
      await axios.post('/.netlify/functions/raffle-entry', { userId });
      await fetchTickets();
      setRaffleMessage('Successfully joined the raffle!');
    } catch (error) {
      console.error('Error joining raffle:', error);
      setRaffleMessage('Error, try again.');
    }
  };

  const handlePaymentSuccess = () => {
    fetchTickets();
    setRaffleMessage('Payment initiated! Check back for updated tickets.');
  };

  const handlePaymentError = (errorMsg) => {
    setRaffleMessage(errorMsg);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isExpanded && (
        <button
          className="bg-pink-500 w-[50px] h-[50px] rounded-lg flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 text-white text-2xl"
          onClick={() => setIsExpanded(true)}
        >
          <MdConfirmationNumber />
        </button>
      )}

      {isExpanded && (
        <div
          className="bg-white p-4 rounded-lg shadow-xl w-[300px] h-[350px] flex flex-col justify-between"
          style={{ '--primary-color': '#E91E63', '--accent-color': '#FFFFFF' }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Raffle Tickets</h3>
            <button
              className="text-gray-500 hover:text-gray-700 text-2xl"
              onClick={() => setIsExpanded(false)}
            >
              &times;
            </button>
          </div>

          <div className="flex-grow flex flex-col justify-center items-center text-center">
            <p className="text-xl mb-4">
              You have <span className="font-bold text-pink-500">{ticketCount}</span> tickets.
            </p>

            {raffleMessage && (
              <p className="text-sm my-2 text-red-500">
                {raffleMessage}
              </p>
            )}

            <button
              className="bg-[--primary-color] text-[--accent-color] font-bold py-2 px-4 rounded w-full mb-2 hover:opacity-90"
              onClick={handleJoinRaffle}
            >
              Join the Raffle
            </button>

            <PaymentButton
              onPaymentSuccess={handlePaymentSuccess}
              onPaymentError={handlePaymentError}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RaffleWidget;
