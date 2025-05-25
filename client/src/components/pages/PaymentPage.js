// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// function PaymentPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [paymentData, setPaymentData] = useState({
//     cardNumber: "",
//     cardHolder: "",
//     expiryDate: "",
//     cvv: "",
//   });
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handlePayment = (e) => {
//     e.preventDefault();
//     setIsProcessing(true);
    
//     setTimeout(() => {
//       navigate(`/payment-success/${id}`);
//     }, 2000);
//   };

//   return (
//     <div className="max-w-3xl mx-auto py-8 px-4">
//       <h1 className="text-3xl font-bold text-gray-900 mb-8">Payment Details</h1>
//       <div className="bg-white rounded-xl shadow-lg p-6">
//         <form onSubmit={handlePayment} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Card Number</label>
//             <input
//               type="text"
//               required
//               maxLength={16}
//               value={paymentData.cardNumber}
//               onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Card Holder Name</label>
//             <input
//               type="text"
//               required
//               value={paymentData.cardHolder}
//               onChange={(e) => setPaymentData({ ...paymentData, cardHolder: e.target.value })}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
//               <input
//                 type="month"
//                 required
//                 value={paymentData.expiryDate}
//                 onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">CVV</label>
//               <input
//                 type="password"
//                 required
//                 maxLength={3}
//                 value={paymentData.cvv}
//                 onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 w-full"
//             disabled={isProcessing}
//           >
//             {isProcessing ? "Processing..." : "Confirm Payment"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default PaymentPage;

// import React, { useState } from 'react';
// import { CreditCard, Lock, DollarSign } from 'lucide-react';

// function PaymentPage() {
//   const [amount, setAmount] = useState<string>('49.99');
//   const [cardNumber, setCardNumber] = useState<string>('');
//   const [expiry, setExpiry] = useState<string>('');
//   const [cvc, setCvc] = useState<string>('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle payment processing here
//     console.log('Processing payment...');
//   };

//   const formatCardNumber = (value: string) => {
//     const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
//     const matches = v.match(/\d{4,16}/g);
//     const match = (matches && matches[0]) || '';
//     const parts = [];
//     for (let i = 0, len = match.length; i < len; i += 4) {
//       parts.push(match.substring(i, i + 4));
//     }
//     if (parts.length) {
//       return parts.join(' ');
//     }
//     return value;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center p-4">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl">
//         <div className="text-center">
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
//             Complete Your Payment
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Secure payment processing powered by Stripe
//           </p>
//         </div>

//         <div className="mt-8">
//           <div className="flex justify-center space-x-4 mb-8">
//             {['29.99', '49.99', '99.99'].map((price) => (
//               <button
//                 key={price}
//                 onClick={() => setAmount(price)}
//                 className={`px-6 py-3 rounded-lg transition-all ${
//                   amount === price
//                     ? 'bg-indigo-600 text-white'
//                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                 }`}
//               >
//                 ${price}
//               </button>
//             ))}
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="relative">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Card Number
//               </label>
//               <div className="relative">
//                 <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//                 <input
//                   type="text"
//                   value={cardNumber}
//                   onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
//                   placeholder="4242 4242 4242 4242"
//                   maxLength={19}
//                   className="pl-12 w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Expiry Date
//                 </label>
//                 <input
//                   type="text"
//                   value={expiry}
//                   onChange={(e) => setExpiry(e.target.value)}
//                   placeholder="MM/YY"
//                   maxLength={5}
//                   className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   CVC
//                 </label>
//                 <input
//                   type="text"
//                   value={cvc}
//                   onChange={(e) => setCvc(e.target.value)}
//                   placeholder="123"
//                   maxLength={3}
//                   className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
//             >
//               <Lock className="h-5 w-5 mr-2" />
//               Pay ${amount}
//             </button>
//           </form>

//           <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
//             <Lock className="h-4 w-4" />
//             <span>Your payment info is secure and encrypted</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PaymentPage;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const PaymentPage = () => {
//     const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [errors, setErrors] = useState({ card: "", cvv: "" });
//   const amount = 243; // Set static or dynamic amount

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Reset errors
//     let newErrors = { card: "", cvv: "" };

//     // Validate card number (exactly 16 digits)
//     if (!/^\d{16}$/.test(cardNumber.replace(/\s+/g, ""))) {
//       newErrors.card = "Card number must be 16 digits.";
//     }

//     // Validate CVV (exactly 3 digits)
//     if (!/^\d{3}$/.test(cvv)) {
//       newErrors.cvv = "CVV must be 3 digits.";
//     }

//     setErrors(newErrors);

//     // Submit if no errors
//     if (!newErrors.card && !newErrors.cvv) {
//       alert("Payment Successful!");
//       navigate("/");
//     }
//   };

// //   const [showConfirmation, setShowConfirmation] = useState(false);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setShowConfirmation(true);
// //     // Here you would typically make an API call to save the booking
// //   };

// //   if (showConfirmation) {
// //     return (
// //       <div className="max-w-3xl mx-auto py-8 px-4">
// //         <div className="bg-white rounded-xl shadow-lg p-8 text-center">
// //           <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //             <ThumbsUp className="h-8 w-8 text-green-600" />
// //           </div>
// //           <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
// //           <p className="text-gray-600 mb-6">
// //             Thank you for booking a seat at {center.name}. We have sent a confirmation email.
// //           </p>
// //           <div className="flex justify-center gap-4">
// //             <button
// //               onClick={() => navigate('/')}
// //               className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
// //             >
// //               Back to Home
// //             </button>
// //             {/* <button
// //               onClick={() => navigate(`/center/${id}`)}
// //               className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
// //             >
// //               View Center Details
// //             </button> */}
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center text-gray-900">
//           Payment Details
//         </h2>

//         <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
//           {/* Person Name */}
//           <div>
//             <label className="block text-gray-700 font-medium">Person Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Name"
//               required
//               className="w-full mt-1 p-3 rounded-lg bg-slate-100 text-black placeholder-gray-400 focus:ring focus:ring-blue-300"
//             />
//           </div>

//           {/* Card Number */}
//           <div>
//             <label className="block text-gray-700 font-medium">Card Number</label>
//             <input
//               type="text"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//               placeholder="1234 5678 435678"
//               maxLength={19}
//               required
//               className="w-full mt-1 p-3 rounded-lg bg-slate-100 text-black placeholder-gray-400 focus:ring focus:ring-blue-300"
//             />
//             {errors.card && <p className="text-red-500 text-sm">{errors.card}</p>}
//           </div>

//           {/* Expiry & CVV */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 font-medium">Expiry</label>
//               <input
//                 type="date"
//                 value={expiry}
//                 onChange={(e) => setExpiry(e.target.value)}
//                 placeholder="MM/YYYY"
//                 maxLength={7}
//                 required
//                 className="w-full mt-1 p-3 rounded-lg bg-slate-100 text-black placeholder-gray-400 focus:ring focus:ring-blue-300"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium">CVV/CVC</label>
//               <input
//                 type="password"
//                 value={cvv}
//                 onChange={(e) => setCvv(e.target.value)}
//                 placeholder="•••"
//                 maxLength={3}
//                 required
//                 className="w-full mt-1 p-3 rounded-lg bg-slate-100 text-black placeholder-gray-400 focus:ring focus:ring-blue-300"
//               />
//               {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
//             </div>
//           </div>

//           {/* Pay Button */}
//           <button
//             type="submit"
//             className="w-full py-3 mt-4 rounded-lg text-white font-semibold text-lg bg-gradient-to-r from-blue-500 to-teal-400 hover:opacity-90 flex items-center justify-center"
//           >
//             Pay {amount} ➜
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;


// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import summaryApi from "../../common";

// function PaymentPage() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const bookingPayload = state?.bookingPayload;

//   const handlePayment = async () => {
//     try {
//       // Simulate payment success or integrate with real gateway
//       // Then save booking
//       const res = await fetch(summaryApi.booking.url, {
//         method: summaryApi.booking.method,
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(bookingPayload),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Booking failed after payment");

//       navigate(`/center/${bookingPayload.coachingCenterId}/success`, {
//         state: { email: bookingPayload.email, name: bookingPayload.fullName },
//       });

//     } catch (err) {
//       alert("Booking failed: " + err.message);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
//       <h2 className="text-xl font-bold mb-4">Payment Page</h2>
//       <p>Amount to Pay: ₹{bookingPayload?.amount}</p>
//       <button
//         onClick={handlePayment}
//         className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg"
//       >
//         Pay Now
//       </button>
//     </div>
//   );
// }

// export default PaymentPage;

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import summaryApi from "../../common";

// function PaymentPage() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const bookingPayload = state?.bookingPayload;
//   const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY_ID;

//   const handlePayment = async () => {
//     try {
//       // Step 1: Create Razorpay order from backend
//       const res = await fetch(summaryApi.payment.url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(bookingPayload),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Failed to create order");

//       const { order } = data;

//       // Step 2: Open Razorpay payment UI
//       const options = {
//         key: razorpayKey,
//         amount: order.amount,
//         currency: order.currency,
//         name: "Coaching Center Booking",
//         description: "Seat Booking Payment",
//         order_id: order.id,
//         handler: async function (response) {
//           // Step 3: Verify payment
//           const verifyRes = await fetch(summaryApi.verifyPayment.url, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               razorpayOrderId: response.razorpay_order_id,
//               razorpayPaymentId: response.razorpay_payment_id,
//               razorpaySignature: response.razorpay_signature,
//             }),
//           });

//           const verifyData = await verifyRes.json();
//           if (!verifyRes.ok) throw new Error(verifyData.message || "Payment verification failed");

//           // Step 4: Save booking after successful payment
//           const bookingRes = await fetch(summaryApi.booking.url, {
//             method: summaryApi.booking.method,
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(bookingPayload),
//           });

//           const bookingData = await bookingRes.json();
//           if (!bookingRes.ok) throw new Error(bookingData.message || "Booking failed after payment");

//           // Step 5: Redirect
//           navigate(`/center/${bookingPayload.coachingCenterId}/success`, {
//             state: { email: bookingPayload.email, name: bookingPayload.fullName },
//           });
//         },
//         prefill: {
//           name: bookingPayload.fullName,
//           email: bookingPayload.email,
//           contact: bookingPayload.phone,
//         },
//         theme: {
//           color: "#6366f1",
//         },
//       };

//       const razor = new window.Razorpay(options);
//       razor.open();

//     } catch (err) {
//       alert("Error: " + err.message);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
//       <h2 className="text-xl font-bold mb-4">Payment Page</h2>
//       <p>Amount to Pay: ₹{bookingPayload?.amount}</p>
//       <button
//         onClick={handlePayment}
//         className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg"
//       >
//         Pay Now
//       </button>
//     </div>
//   );
// }

// export default PaymentPage;


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import summaryApi from "../../common";

function PaymentPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const bookingPayload = state?.bookingPayload;
  const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY_ID;

  const handlePayment = async () => {
    try {
      // Step 1: Create Razorpay order from backend
      const res = await fetch(summaryApi.payment.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingPayload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to create order");

      const { order } = data;

      // Step 2: Open Razorpay payment UI
      const options = {
        key: razorpayKey,
        amount: order.amount,
        currency: order.currency,
        name: "Coaching Center Booking",
        description: "Seat Booking Payment",
        order_id: order.id,
        handler: async function (response) {
          // Step 3: Verify payment
          const verifyRes = await fetch(summaryApi.verifyPayment.url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();
          if (!verifyRes.ok) throw new Error(verifyData.message || "Payment verification failed");

          // Step 4: Save booking after successful payment
          const bookingRes = await fetch(summaryApi.booking.url, {
            method: summaryApi.booking.method,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingPayload),
          });

          const bookingData = await bookingRes.json();
          if (!bookingRes.ok) throw new Error(bookingData.message || "Booking failed after payment");

          // Step 5: Redirect
          navigate(`/center/${bookingPayload.coachingCenterId}/success`, {
            state: {
              email: bookingPayload.email,
              name: bookingPayload.fullName,
            },
          });
        },
        prefill: {
          name: bookingPayload.fullName,
          email: bookingPayload.email,
          contact: bookingPayload.phone,
        },
        theme: {
          color: "#6366f1",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();

    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const handleBackToBooking = () => {
    navigate(`/center/${bookingPayload.coachingCenterId}/book`, {
      state: { formData: bookingPayload },
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Payment Page</h2>
      <p className="mb-4">Amount to Pay: ₹{bookingPayload?.amount}</p>

      <div className="flex gap-4">
        <button
          onClick={handlePayment}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
        >
          Pay Now
        </button>
        <button
          onClick={handleBackToBooking}
          className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400"
        >
          Back to Booking
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;
