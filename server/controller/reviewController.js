// const mongoose = require("mongoose");
// const CoachingCenter = require("../models/centerModel");

// exports.addReview = async (req, res) => {
//     try {
//       const { centerId, userId, userName, rating, comment } = req.body;
  
//       const center = await coachingModel.findById(centerId);
//       if (!center) return res.status(404).json({ message: "Coaching center not found" });
  
//       // Check if user already reviewed
//       const alreadyReviewed = center.reviews.find(
//         (r) => r.user.toString() === userId
//       );
//       if (alreadyReviewed) {
//         return res.status(400).json({ message: "You have already reviewed this coaching center." });
//       }
  
//       const review = {
//         user: userId,
//         userName,    // 👈 storing username too
//         rating,
//         comment
//       };
  
//       center.reviews.push(review);
  
//       // Update overall average rating
//       center.rating =
//         center.reviews.reduce((acc, item) => item.rating + acc, 0) /
//         center.reviews.length;
  
//       await center.save();
  
//       res.status(201).json({ message: "Review added successfully!" });
  
//     } catch (err) {
//       res.status(500).json({ message: "Something went wrong", error: err.message });
//     }
//   };
  

// // Optional: Get coaching center details with populated reviews
// exports.getCoachingCenter = async (req, res) => {
//   try {
//     const center = await CoachingCenter.findById(req.params.id).populate("reviews.user", "name email");
//     res.status(200).json(center);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch coaching center" });
//   }
// };

const CoachingCenter = require("../models/centerModel");

exports.addReview = async (req, res) => {
  try {
    const { centerId, userId, userName, rating, comment } = req.body;

    // No need to check for center existence if you're sure it's valid from frontend

    const center = await CoachingCenter.findById(centerId);

    const alreadyReviewed = center.reviews.find(
      (r) => r.user.toString() === userId
    );

    if (alreadyReviewed) {
      return res.status(400).json({ message: "You have already reviewed this coaching center." });
    }

    const review = {
      user: userId,
      userName,    // 👈 storing username too
      rating,
      comment
    };

    center.reviews.push(review);

    // Update overall average rating
    center.rating =
      center.reviews.reduce((acc, item) => item.rating + acc, 0) / center.reviews.length;

    await center.save();

    res.status(201).json({ message: "Review added successfully!" });

  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
};

exports.getCoachingCenter = async (req, res) => {
  try {
    const center = await CoachingCenter.findById(req.params.id).populate("reviews.user", "name email");
    res.status(200).json(center);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch coaching center" });
  }
};
