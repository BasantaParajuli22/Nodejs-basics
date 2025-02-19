import 'dotenv/config';
import  http  from 'http';
import fs from 'fs/promises';

import url from 'url';
import path, { join } from 'path';

/**
 * __filepath and __dirpath is only available in common js module
 * so making one to use in ES module
 */

const __filepath = url.fileURLToPath(import.meta.url); 
const __dirpath = path.dirname(__filepath);


console.log(import.meta.url)//file:///C:/Users/darshan/OneDrive/Desktop/node%20js/server.js
console.log(__filepath);      //C:\Users\darshan\OneDrive\Desktop\node js\server.js
console.log(__dirpath);       //C:\Users\darshan\OneDrive\Desktop\node js


const server = http.createServer(async (req,res)=>{

    let filepath;
    try{
        if(req.method === 'GET'){
            if(req.url === '/'){
               filepath = path.join(__dirpath, 'public','home.html');
            } else if(req.url === '/about'){
                filepath = path.join(__dirpath, 'public','about.html');
            } else {
                throw new Error("no such method found");
            }

            const data = await fs.readFile(filepath);

            res.writeHead(404,'Conntent-Type','text/html');
            res.write(data);
            res.end();

        } else {
            throw new Error("method not allowed");
        }
    }catch(error){
        res.writeHead(404,'Conntent-Type','text/html');
        res.write('cannot found');
        res.end();
    }

});

const PORT = process.env.PORT;
server.listen(PORT, () =>{
    console.log(`port running in ${PORT}`);
})


