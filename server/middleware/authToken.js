const jwt = require('jsonwebtoken')
async function authToken(req,res,next){
    try{
        // const token=req.cookies?.token
        let token = req.header("Authorization")?.replace("Bearer ", "") || req.cookies?.token;
        if(!token){
            return res.status(200).json({
                message: "User not loggedIn",
                error: true,
                success: false
            })
        } 
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err,decoded){
            console.log(err);
            console.log("decoded",decoded)
            if(err){
                console.log("error auth", err)
            }
            req.userId=decoded?._id
            

            console.log("decoded",decoded)
            console.log("User ID from token:", req.userId);
            next()
        })
    }catch(err){
        res.status(400).json({
            message: err.message || err,
            data:[],
            error: true,
            success: false
        })
    }
}
module.exports = authToken


