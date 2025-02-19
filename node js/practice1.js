//	Write a script that reads a file asynchronously and logs its content.
//	Handle errors for file operations.

import fs from 'fs/promises';

/**
 * normal file async read 
 * 
 * const data =await fs.readFile('test.txt','utf-8');
 * console.log(data);
 * 
 */


/** 
 * async read with try catch 
 *
 *  try { 
    const data =await fs.readFile('test.txt','utf-8');
    console.log(data);
} catch (error) {
    console.log(error);
}
 */

/**
 * asynchronously read a file with try catch 
 * @param{string} filepath -the file name to be read 
 */

const readFileAsync = async (filepath) =>{
    try { 
        const data =await fs.readFile(filepath,'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }  
}

const filePath = 'test.txt';
readFileAsync(filePath);