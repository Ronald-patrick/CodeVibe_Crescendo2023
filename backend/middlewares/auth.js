const jwt = require('jsonwebtoken')

exports.Auth = async (req,res,next) =>{
    try {
        console.log(req.headers);
        const token = req.headers.authorization.split(" ")[1];

        const decodedToken = jwt.verify(token,process.env.JWT_SECRET)

        console.log(decodedToken)

        req.user = decodedToken;

        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({
            error : "Auth Failed!"
        })
    }
}