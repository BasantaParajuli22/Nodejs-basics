import express from 'express';
import { generatePassword } from './passGenerator.js';


const app = express();

app.use('/', (req, res) => {

    //getting length from url @default = 16
    const length = parseInt(req.query.length) || 16;
    
    if(isNaN(length) || length <= 0){
        return res.status(400).json( {message: 'length is not a number'})
    }

    const password = generatePassword(length);
    res.json( {password})
} )

app.listen(5000,() => console.log("port running in 5000"));