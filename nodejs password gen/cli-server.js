import { generatePassword } from './passGenerator.js';

console.log("cli based pass generation");

//for cli terminal
 //eg: node server.js 20
const cliBasedPassGeneration =() =>{
    //taking length from cli 
    //by slicing at index 2 
    let argument = process.argv.slice(2);

    //if argument in cli parseInt(arg[0])
    //if no argument in cli then default = 16
    const length = argument[0] ? parseInt(argument[0]) : 16;

        if(isNaN(length) || length <= 0 ){
            console.log("not a proper number");
            process.exit(1);
        }

    const password = generatePassword(length);
    console.log(`generated password is ${password} \n`);
}


cliBasedPassGeneration();
  
// console.log(process.argv[2])
// console.log(process.argv[0])
// console.log(process.argv[1])


