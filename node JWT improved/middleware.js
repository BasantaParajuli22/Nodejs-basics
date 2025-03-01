import 'dotenv/config'; // Load environment variables from .env
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

//middleware to verify tokens 
//using token and JWT_SECRET 
const authenticateToken = (req,res,next) =>{

    //check if headers is authorization and 
    // if exists and splitting them in array getting array index1
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    // console.log("Request Headers:", req.headers); 
    // console.log("Token:", token); 
    
    if(!token){
        return res.status(401).json({message: 'token required'})
    }
    jwt.verify(token, JWT_SECRET, (err, user) =>{
        if(err){
            return res.status(403).json({message: 'invalid or expired token'});//forbidden
        }
        //extracts user information from the token's payload 
        // and attach it to the req.user object.
        req.user = user;
        next();

    })
};

export default authenticateToken