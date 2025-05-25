// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "user",
//     required: true
//   },
//   coachingCenter: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "coaching",
//     required: true
//   },
//   fullName: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   phone: {
//     type: String,
//     required: true
//   },
//   subjects: [String],
//   notes: String,
//   paymentStatus: {
//     type: String,
//     enum: ["pending", "completed", "failed"],
//     default: "pending"
//   },
//   bookingDate: {
//     type: Date,
//     default: Date.now
//   }
// }, {
//   timestamps: true
// });

// const BookingModel = mongoose.model("booking", bookingSchema);
// module.exports = BookingModel;

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  coachingCenterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CoachingCenter',
    required: true
  },
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  // subjects: {
  //   type: [String],
  //   required: true
  // },
  exams: {
    type: [String],
    required: true
  },
  notes: {
    type: String
  },
  amount: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
