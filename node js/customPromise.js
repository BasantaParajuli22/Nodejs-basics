//creating a promise

import fs from 'fs/promises';

const promisetoDo = new Promise((resolve,reject) =>{
    const success =false;
    if(success){
        console.log("if success");
    }else{
        console.log("if failed");
    }
});

promisetoDo
    .then((result) => {
        console.log(result);
    })
    .then((result) => {
        console.log(`next result will be ${result}`);
    })
    .catch((error) => {
        console.log(error);
    });