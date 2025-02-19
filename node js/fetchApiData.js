
import fs from 'fs/promises';

//async await fetch data from apiName 

const fetchApiData = async (apiName) =>{

    try {
        const response = await fetch(apiName);//await => fetch promise - result
        if(!response.ok) throw new Error("fetching failed");

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

const apiName = 'https://api.example.com/data';
fetchApiData(apiName);