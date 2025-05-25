const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Unique ID for each review
    // user: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userName: { type: String },
    rating: Number,
    comment: String,
    date: { type: Date, default: Date.now }
});

const coachingCenterSchema = new mongoose.Schema({
    name: String,
    image: String,
    location: String,
    // rating: Number,
    rating: { type: Number, default: 0 },
    reviews: [reviewSchema],  // Store reviews with unique IDs
    subjects: [String],
    seatsAvailable: Number,
    totalSeats: Number,
    lastDate: { type: Date, required: true },
    fees: Number,
    description: String,
    faculties: [{ name: String, subject: String, experience: String }],
    facilities: [String],
    exams: [String],
    category: [String]
});
const coachingModel = mongoose.model("coaching",coachingCenterSchema)
module.exports = coachingModel
