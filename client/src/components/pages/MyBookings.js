import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import summaryApi from '../../common';

function MyBookings() {
  const user = useSelector((state) => state.user.user);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const response = await fetch(summaryApi.myBooking.url, {
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        },
      });

      const result = await response.json();
    console.log("booking Data", result);
    setBookings(result.data);  // Accessing data from the response
    setLoading(false);
  } catch (error) {
    console.error("Failed to fetch bookings", error);
    setLoading(false);
  }
};

  useEffect(() => {
    if (user) {
      fetchBookings();
    }
  }, [user]);

  if (loading) return <p className="p-5">Loading your bookings...</p>;

  if (bookings.length === 0)
    return <p className="p-5">No bookings found. Book a seat now!</p>;

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">My Bookings</h1>
      {/* {bookings.map((booking) => (
        <div
          key={booking._id}
          className="bg-white rounded-lg shadow p-4 mb-4 border"
        >
          <h2 className="text-xl font-semibold">
            {booking.coachingCenterId.name}
          </h2>
          <p className="text-gray-600">Subjects: {booking.subjects.join(", ")}</p>
          <p className="text-gray-600">Amount: ₹{booking.amount}</p>
          <p className="text-gray-600">Payment: {booking.paymentStatus}</p>
          <p className="text-gray-500 text-sm">Booked on: {new Date(booking.createdAt).toLocaleDateString()}</p>
        </div>
      ))} */}
      {bookings.map((booking) => (
  <div
    key={booking._id}
    className="bg-white rounded-lg shadow p-4 mb-4 border"
  >
    <h2 className="text-xl font-semibold">
      {booking.coachingCenterId ? booking.coachingCenterId.name : 'Coaching Center Not Available'}
    </h2>
    <p className="text-gray-600">Subjects: {booking.subjects.join(", ")}</p>
    <p className="text-gray-600">Amount: ₹{booking.amount}</p>
    <p className="text-gray-600">Payment: {booking.paymentStatus}</p>
    <p className="text-gray-500 text-sm">Booked on: {new Date(booking.createdAt).toLocaleDateString()}</p>
  </div>
))}

    </div>
  );
}

export default MyBookings;


// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import summaryApi from '../../common';

// function MyBookings() {
//   const user = useSelector((state) => state.user.user);  // Access user from Redux
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchBookings = async () => {
//     try {
//       if (!user || !user._id) {
//         console.error("User is not logged in or user ID is missing");
//         return;
//       }

//       // Assuming your backend expects the user ID to be passed in the body or headers
//       const response = await fetch(`http://localhost:8080/api/my-bookings?userId=${user._id}`, {
//         credentials: 'include',
//         method: 'GET',  // Assuming POST request, you can use GET if required
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         // body: JSON.stringify({
//         //   userId: user._id,  // Passing user._id from Redux
//         // }),
//       });

//       const result = await response.json();
//       console.log("Booking Data:", result);
      
//       if (result?.data) {
//         setBookings(result.data);
//       } else {
//         console.error("Invalid booking data structure", result);
//       }
//       setLoading(false);
//     } catch (error) {
//       console.error("Failed to fetch bookings", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       fetchBookings();
//     }
//   }, [user]);

//   if (loading) return <p className="p-5">Loading your bookings...</p>;

//   if (bookings.length === 0) 
//     return <p className="p-5">No bookings found. Book a seat now!</p>;

//   return (
//     <div className="p-5 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-5">My Bookings</h1>
//       {bookings.map((booking) => (
//         <div
//           key={booking._id}
//           className="bg-white rounded-lg shadow p-4 mb-4 border"
//         >
//           <h2 className="text-xl font-semibold">
//             {booking.coachingCenterId ? booking.coachingCenterId.name : 'Coaching Center Not Available'}
//           </h2>
//           <p className="text-gray-600">
//             Subjects: {booking.subjects ? booking.subjects.join(", ") : "Subjects not available"}
//           </p>
//           <p className="text-gray-600">Amount: ₹{booking.amount}</p>
//           <p className="text-gray-600">Payment: {booking.paymentStatus || "Payment status not available"}</p>
//           <p className="text-gray-500 text-sm">
//             Booked on: {new Date(booking.createdAt).toLocaleDateString()}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MyBookings;
