import { randomBytes } from "crypto";


//generate password 
//takes argument length @default = 16
function generatePassword(length = 16) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
console.log("password is being generated")
    //randomBytes generates betn 0-255 in buffer
    const randomValues = randomBytes(length);
    let password ='';

    for(let i = 0; i < length; i++){
        let randomIndex = randomValues[i] % charset.length; //Example: 14 % 16 = 14
        password = password + charset[randomIndex];
    }
    return password;
    
}

export { generatePassword};