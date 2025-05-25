const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // if you have a User model
    required: true,
  },
  centerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoachingCenter",
    required: true,
  },
  fullName: String,
  email: String,
  phone: String,
  subjects: [String],
  notes: String,

  razorpayOrderId: String,
  razorpayPaymentId: String,
  razorpaySignature: String,
  amount: Number,
  currency: { type: String, default: "INR" },

  isPaid: { type: Boolean, default: false },
  paidAt: Date,
}, { timestamps: true });

const  Payment = mongoose.model("Payment",paymentSchema)
module.exports = Payment
