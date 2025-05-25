const Booking = require("../models/bookingModel");
const coachingModel = require("../models/centerModel"); 

// @desc    Get all bookings for logged-in user
// @route   GET /api/bookings/my-bookings
// @access  Private
const getMyBookings = async (req, res) => {
  console.log("User ID from req: ", req.user);

    try {
      const bookings = await Booking.find({ userId: req.userId })  // notice userId not req.user._id based on your auth middleware
        .populate("coachingCenterId", "name")
        .sort({ createdAt: -1 });
  
      res.status(200).json({
        message: "Bookings fetched successfully",
        success: true,
        data: bookings, // send as data property
      });
    } catch (error) {
      console.error("Server Error: ", error);
      res.status(500).json({
        message: "Server Error",
        success: false,
        data: [],
      });
    }
  };
  

module.exports = {
  getMyBookings,
};

// const Booking = require("../models/bookingModel");

// // @desc    Get all bookings for logged-in user
// // @route   POST /api/bookings/my-bookings
// // @access  Private
// const getMyBookings = async (req, res) => {
//   // const { userId } = req.body; 
//   const userId = req.query.userId; // Access userId from the request body (sent by frontend)

//   console.log("User ID from request body: ", userId);

//   if (!userId) {
//     return res.status(400).json({
//       message: "User ID is required",
//       success: false,
//       data: [],
//     });
//   }

//   try {
//     // Find bookings associated with the provided userId
//     const bookings = await Booking.find({ userId: userId })  // Use userId from the body
//       .populate("coachingCenterId", "name")  // Populate coaching center details (e.g., name)
//       .sort({ createdAt: -1 });  // Sort bookings by creation date in descending order

//     res.status(200).json({
//       message: "Bookings fetched successfully",
//       success: true,
//       data: bookings,  // Return bookings in the data property
//     });
//   } catch (error) {
//     console.error("Server Error: ", error);
//     res.status(500).json({
//       message: "Server Error",
//       success: false,
//       data: [],
//     });
//   }
// };

// module.exports = {
//   getMyBookings,
// };


// controllers/getBookingController.js
// const CoachingCenter = require('../models/centerModel');  // Import the CoachingCenter model
// const Booking = require('../models/bookingModel');  // Import the Booking model

// const getMyBookings = async (req, res) => {
//   const userId = req.query.userId;

//   try {
//     const bookings = await Booking.find({ userId })
//       .populate('coachingCenterId', 'name') // This will populate the coachingCenterId with the name
//       .sort({ createdAt: -1 });

//     if (bookings.length === 0) {
//       return res.status(404).json({
//         message: 'No bookings found. Book a seat now!',
//         success: false,
//       });
//     }

//     res.status(200).json({
//       message: 'Bookings fetched successfully',
//       success: true,
//       data: bookings,
//     });
//   } catch (error) {
//     console.error('Server Error:', error);
//     res.status(500).json({
//       message: 'Server Error',
//       success: false,
//       details: error.message,
//     });
//   }
// };
