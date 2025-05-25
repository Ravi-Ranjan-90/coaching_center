const bcrypt = require("bcryptjs")
const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")
async function userSignInController(req,res){
    try{
        const {email, password} = req.body;
        if(!email){
            throw new Error("please provide email")
        }
        if(!password){
            throw new Error("please provide password")
        }
        const user = await userModel.findOne({email});
        if(!user){
            throw new Error("user not found")
            }
        const checkPassword = await bcrypt.compare(password,user.password);
        if(checkPassword){
            const tokenData = {
                _id: user._id,
                email: user.email
            }
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY,{expiresIn: 60*60*8});
            const tokenOption={
                httpOnly: true,
                // secure: process.env.NODE_ENV === "production"
                secure: true
            }
            res.cookie("token",token,tokenOption).status(200).json({
                message: "user logged in successfully", 
                data: token,
                success: true,
                error: false
            })
        }else{
            throw new Error("password is not correct")
        }
            // if(!isValidPassword){
            //     throw new Error("invalid password")
            //     }
            //     const token = jwt.sign({user_id:user._id},process.env.SECRET_KEY,{
            //         expiresIn: "1h"
            //         });
    }catch(err){
        res.json({
            message: err.message || err,
            error: true,
            success: false,
    })}
}
module.exports = userSignInController