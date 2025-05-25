const express = require("express")
const router = express.Router()
const userSignUpController = require("../controller/userSignUp.js")
const userSignInController = require("../controller/userSignIn.js")
const userDetailsController = require("../controller/userDetails.js")
const getCenterController = require("../controller/getCenter.js")
const userLogout =require("../controller/userLogout.js")
const authToken = require("../middleware/authToken")
const uploadCenterDetailsController = require("../controller/uploadCenterDetails.js")
const { createBooking } = require("../controller/bookingController");
const { createOrder, verifyPayment } = require("../controller/paymentController.js");
const reviewController = require("../controller/reviewController");
const { getMyBookings } = require("../controller/getBookingController");

router.post("/signup",userSignUpController);
router.post("/signin",userSignInController);
router.get("/user-details",authToken,userDetailsController);
router.get("/userLogout",userLogout)

// center
router.post("/upload-center-details",authToken,uploadCenterDetailsController)
router.get("/get-all-center",getCenterController)

// booking
router.post("/booking", createBooking);
router.post("/payment", createOrder);
router.post("/verify-payment", verifyPayment);

router.get("/my-bookings",authToken,getMyBookings);

router.post("/add-review",  reviewController.addReview);
router.get("/center/:id", reviewController.getCoachingCenter);

module.exports = router;
