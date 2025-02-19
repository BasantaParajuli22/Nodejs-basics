import fs from 'fs/promises';

/**
 * contains readFile 
 * Sync readFile
 * async readFile
 * async writeFile
 * async AppendFile
 * promise readFile
 */

// callback readFile
fs.readFile('test.txt', 'utf-8', (err,txt) =>{
    if(err) throw err;
    console.log(txt);
});

//Sync readFile
const txt2 = fs.readFileSync('test.txt', 'utf-8');
console.log(txt2);


//read text from file async
const asyyncReadATextFile = async () =>{
    try {
        const data = await fs.readFile('test.txt', 'utf-8'); 
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

//write text to file async
const asyyncWriteToTextFile = async () =>{
    try {
        await fs.writeFile('test.txt', 'this is text writeen to test file '); 

    } catch (error) {
        console.log(error);
    }
}

//append text to file async
const asyyncAppendToTextFile = async () =>{
    try {
        await fs.appendFile('test.txt', '\n chowmin momo dumplings'); 
    } catch (error) {
        console.log(error);  
    }
}

//calling functions sequentially
//IIFE => immediately invoke function
//ensures async function are executed sequentially  
const WriteAppendReadFile =  async () =>{

    asyyncWriteToTextFile();
    asyyncAppendToTextFile();
    asyyncReadATextFile();
}


WriteAppendReadFile();//which calls all async functions

console.log("lets see which will be displayed first ");

//promise function
fs.readFile('test.txt', 'utf-8')
.then ((data) => { console.log(data)  } )
.catch ((err) => { console.log(err)  } )

