const Razorpay = require("razorpay");
const crypto = require("crypto");
const  Payment = require("../models/paymentModel");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order
const createOrder = async (req, res) => {
  try {
    const { amount, userId, coachingCenterId, fullName, email, phone, subjects, notes } = req.body;

    const options = {
      amount: amount * 100, // in paise
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`
    };

    const order = await razorpay.orders.create(options);

    // Save in DB with isPaid = false initially
    // console.log("Incoming payment data:", {
    //     userId,
    //     centerId: coachingCenterId,
    //     fullName,
    //     email,
    //     phone,
    //     subjects,
    //     notes,
    //     amount
    //   });
    await Payment.create({
      userId, centerId:coachingCenterId, fullName, email, phone, subjects, notes,
      razorpayOrderId: order.id,
      amount,
      currency: "INR"
    });

    res.status(200).json({ success: true, order });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Order creation failed" });
  }
};

// Verify payment
const verifyPayment = async (req, res) => {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

    // Verify signature
    const sign = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpayOrderId}|${razorpayPaymentId}`)
      .digest("hex");

    if (sign !== razorpaySignature) {
      return res.status(400).json({ success: false, message: "Invalid signature" });
    }

    // Mark as paid
    const payment = await Payment.findOneAndUpdate(
      { razorpayOrderId },
      {
        razorpayPaymentId,
        razorpaySignature,
        isPaid: true,
        paidAt: new Date(),
      },
      { new: true }
    );

    res.status(200).json({ success: true, message: "Payment verified", payment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Payment verification failed" });
  }
};
module.exports = {
    createOrder, verifyPayment
  };
