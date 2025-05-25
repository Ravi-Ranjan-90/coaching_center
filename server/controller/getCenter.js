const centerModel = require("../models/centerModel")
const getCenterController = async(req,res)=>{
    try{
        const allCenter = await centerModel.find().sort({createdAt : -1})
        res.json({
            message: "All Center", 
            error: false,
            success: true,
            data : allCenter
        })
    } catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}
module.exports = getCenterController;