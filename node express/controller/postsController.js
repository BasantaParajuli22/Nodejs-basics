
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ];

const getItems = (req, res) =>{
    res.status(200).json(items);
}

const getItem = (req, res, next) => {

    const id = parseInt(req.params.id);
    const item = items.find( (object) => object.id == id);

    if(!item){
        const error = new Error(`item not found by get method`);
        error.status = 404;
        return next(error);
    }
    res.status(200).json(item);
}

const putItem = (req, res, next) => {
 
    //find item by its id to update
    const id = parseInt(req.params.id);
    const item = items.find( (object) => object.id == id);

    if(!item){
        const error = new Error(`item not found by get update`)
        error.status = 404;
        return next(error);
    }
    //replacing item name with submitted name => req.body.name
    item.name = req.body.name;

    res.status(201).json(item);
}

const createItem = (req, res) => {
    
    const newId = items.length+1;
    const newName = req.body.name;
    
    if (!newName) {
        return res.status(400).json({ error: 'Name is required' });
    }
    console.log(newName)
    const newItem = {
        id : newId, 
        name : newName
    }
    items.push(newItem);
   
    res.status(201).json(items);
}

const deleteItem = (req, res, next) => {
    
    const id = parseInt(req.params.id);

    //to delete
    //using splice which takes startIndex and deleteCount
    //returns deletedArray
    const startIndex = items.findIndex( (obj) => obj.id === id);
    
    if(!startIndex){
        const error = new Error(`item not found by get update`)
        error.status = 404;
        return next(error);
    }
   const deletedArray = items.splice(startIndex,1);

    res.status(201).json(deletedArray[0]);
};


 export {getItem, getItems, createItem, putItem, deleteItem }; 