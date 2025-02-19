import express from 'express';

const app = express();

/**
 * app.use() is used for middleware, which runs for every request.
 * app.use ( (req,res,next) => {
 * 
 * })
 */

//app.use() for logging
app.use((req, res, next) => {
    console.log(`the url ${req.url} is requesting ${req.method} method`);
    next();
});


app.get('/', (req,res) =>{
    res.send(`<h1>hello sir  /</h1>`);
});

app.get('/about', (req,res) =>{
    res.send(`<h1>about us page /</h1>`);
});
app.get('/contact', (req,res) =>{
    res.send(`<h1>contact page  /</h1>`);
});

//takes a string in url as params
app.get('/user/:name', (req,res) =>{
    const username = req.params.name;
    res.send(`<h1>hello sir  ${username} </h1> `);
});

app.listen( 5000 , () => {
    console.log("server running ", 5000);
})