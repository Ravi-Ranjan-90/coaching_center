import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SuccessPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Booking Successful!</h1>
      <p>Thank you, {state?.name}. A confirmation email has been sent to {state?.email}.</p>
      <button
        className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded"
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
    </div>
  );
}

export default SuccessPage;
