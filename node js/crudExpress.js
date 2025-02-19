import express from 'express';

const app = express();
app.use(express.json()); //Middleware to parse JSON bodies

let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ];

app.use( (req,res,next) =>{
    console.log(`${req.method} method is requesting ${req.url} `);
    next();
})

//to view data to front convert it to json
app.get('/', (req, res) =>{
    res.status(200)
        .json(items);
})

//get items by id
app.get('/item/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const item = items.find( (object) => object.id == id);

    if(!item){
        return res.status(404)
                .json( {message :'item not found to update'} );
    }
    res.status(200)
        .json(item);
})

//send put api 
//put items by id
app.put('/item/:id', (req, res) => {
 
    //find item by its id to update
    const id = parseInt(req.params.id);
    const item = items.find( (object) => object.id == id);

    if(!item){
        return res.status(404)
                .json( {message :'item not found to update'} );
    }
    //replacing item name with submitted name => req.body.name
    item.name = req.body.name;

    res.status(201)
        .json(item);
})

//post an item into array 
app.post('/item', (req, res) => {
    
    const newId = items.length+1;
    const newName = req.body.name;

    const newItem = {
        id : newId, 
        name : newName
    }
    items.push(newItem);
   
    res.status(201)
        .json(newItem);
})


//delete an item using id
app.delete('/item/:id', (req, res) => {
    
    const id = parseInt(req.params.id);

    //to delete
    //using splice which takes startIndex and deleteCount
    //returns deletedArray
    const startIndex = items.findIndex( (obj) => obj.id === id);
    if(!startIndex){
        return res.status(404)
                .json( {message :'item not found to delete'} );
    }
   const deletedArray = items.splice(startIndex,1);

    res.json(deletedArray[0]);
})



app.listen( 5000 , () => {
    console.log("server running ", 5000);
})