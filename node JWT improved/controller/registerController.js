import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config'; // Load environment variables from .env


const JWT_SECRET = process.env.JWT_SECRET;
console.log(JWT_SECRET)

const users = [];


const signup = async (req, res) =>{

    const {username, password } = req.body; 
    //if username or password not provided then return error 
    if(!username || !password){
        return res.status(400).json({message: 'username or password is required'})
    }

    //if already exists then return error 
    const ifExists = users.find( ( user) => user.username === username);
    if(ifExists){
        return res.status(409).json({message: 'username already exists'});//duplicate conflicts
    }

    try {
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //for now creating new user in array 
        const newUser = {username, password:hashedPassword};
        users.push(newUser);

        res.status(201).json( {message: 'user successfully created'});
    } catch (error) {
        console.error(error);
        res.status(500).json( {message: 'internal server failure'});
    }

}


const login = async (req,res) =>{

    const {username, password } = req.body;
    
    //if username or password not provided then return error 
    if(!username || !password){
        return res.status(400).json({message: 'username or password is required'})
    }
    //if user doesnot exists then return error 
    const existingUser = users.find( ( user)=> user.username == username);
    if(!existingUser){
        return res.status(401).json({message: 'username doesnot exists'});
    }

    //compare hashpassword and password 
    const validPassword = await bcrypt.compare(password, existingUser.password)
    if(!validPassword){
        return res.status(401).json({message: 'username or password didnot match'})
    }

    //generate JWT token if valid login 
    const token = jwt.sign(
        {username: existingUser.username},
        JWT_SECRET,
        {expiresIn: '1h'}
    )

    res.json( {token, message:'use the token to login'});
}


export {login, signup }