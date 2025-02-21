import colors from 'colors'; 

const logger = ( (req, res, next) =>{
    
    //getting colors according to req.method
    const objectOfColors = {
        GET : 'green',
        POST : 'yellow',
        PUT : 'blue',
        DELETE : 'red',
    }
   
    const color = (objectOfColors[req.method] || white ); //value = ob[id]

    //console.log(`${req.method} method is requesting ${req.url} ` ['blue']
    console.log(`${req.method} method is requesting ${req.url} `  [color] );
    next();
});



export default logger;