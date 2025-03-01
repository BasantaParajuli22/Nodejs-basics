import express from 'express';

import authenticateToken from './middleware.js'
import{ login, signup } from './controller/registerController.js';
import{ addToCart, securePage, shop } from './controller/shop.js';


const router = express.Router();
router.use(express.json());

//POST route 
router.post('/signup', signup);
router.post('/login', login);

// secure GET Route
router.get('/secured',authenticateToken, securePage);
router.get('/addToCart',authenticateToken, addToCart);
router.get('/shop',authenticateToken, shop);

export default router