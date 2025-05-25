// const Booking = require("../models/bookingModel");
// const Coaching = require("../models/centerModel");

// // @desc    Create a new booking
// // @route   POST /api/bookings
// // @access  Public or Protected (if user login required)
// const createBooking = async (req, res) => {
//   try {
//     const {
//       userId,
//       coachingCenterId,
//       fullName,
//       email,
//       phone,
//       subjects,
//       notes
//     } = req.body;

//     // Check coaching center and seat availability
//     const center = await Coaching.findById(coachingCenterId);
//     if (!center) {
//       return res.status(404).json({ message: "Coaching center not found" });
//     }

//     if (center.seatsAvailable <= 0) {
//       return res.status(400).json({ message: "No seats available" });
//     }

//     // Check if user has already booked (optional, add if needed)
//     const existingBooking = await Booking.findOne({
//       user: userId,
//       coachingCenter: coachingCenterId
//     });

//     if (existingBooking) {
//       return res.status(400).json({ message: "You have already booked this center" });
//     }

//     // Create booking
//     const newBooking = new Booking({
//       user: userId,
//       coachingCenter: coachingCenterId,
//       fullName,
//       email,
//       phone,
//       subjects,
//       notes,
//       paymentStatus: "paid" // Update this based on your real payment logic
//     });

//     await newBooking.save();

//     // Decrease seat count
//     center.seatsAvailable -= 1;
//     await center.save();

//     res.status(201).json({
//       message: "Booking successful",
//       booking: newBooking
//     });
//   } catch (error) {
//     console.error("Booking error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports = {
//   createBooking
// };

const Booking = require("../models/bookingModel");
const Coaching = require("../models/centerModel");

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Public or Protected
const createBooking = async (req, res) => {
  try {
    const {
      userId,
      coachingCenterId,
      fullName,
      email,
      phone,
      exams,
      notes,
      amount // ensure this is sent from frontend
    } = req.body;

    // Check coaching center and seat availability
    const center = await Coaching.findById(coachingCenterId);
    if (!center) {
      return res.status(404).json({ message: "Coaching center not found" });
    }

    if (center.seatsAvailable <= 0) {
      return res.status(400).json({ message: "No seats available" });
    }

    // Check if user has already booked this center
    const existingBooking = await Booking.findOne({
      userId,
      coachingCenterId
    });

    if (existingBooking) {
      return res.status(400).json({ message: "You have already booked this center" });
    }

    // Create booking
    const newBooking = new Booking({
      userId,
      coachingCenterId,
      fullName,
      email,
      phone,
      exams,
      notes,
      amount,
      paymentStatus: "paid" // set according to payment logic
    });

    await newBooking.save();

    // Decrease seat count
    center.seatsAvailable -= 1;
    await center.save();

    res.status(201).json({
      message: "Booking successful",
      booking: newBooking
    });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createBooking
};
