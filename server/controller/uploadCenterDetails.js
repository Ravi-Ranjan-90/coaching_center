const coachingModel = require("../models/centerModel.js");
const uploadCenterPermission = require("../helpers/permission")
async function uploadCenterDetailsController(req, res) {
    try {
        const sessionUserId = req.userId;
        if(!uploadCenterPermission(sessionUserId)){
            throw new Error("Permission denied")
        }
    const uploadDetails = new coachingModel(req.body)
    const saveCenterDetails = await uploadDetails.save()
    res.status(201).json({
        message: "Center details uploaded successfully", 
        error: false,
        success: true,
        data : saveCenterDetails
    })
    } catch (err) {
      res.status(400).json({
        message: err.message || err,
        error: true,
        success: false,
      });
    }
  }
  
  module.exports = uploadCenterDetailsController;
  