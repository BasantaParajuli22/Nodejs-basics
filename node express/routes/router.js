import express from 'express';

import { getItem, getItems, putItem,deleteItem, createItem } from '../controller/postsController.js';

const router = express.Router();

router.use(express.json()); //Middleware to parse JSON bodies
  
//to view data to front convert it to json
router.get('/', getItems);

//get items by id
router.get('/item/:id', getItem );

//put items by id
router.put('/item/:id',putItem );

//post an item into array 
router.post('/item',createItem );


//delete an item using id
router.delete('/item/:id',deleteItem );


export default router;