import express from 'express';
import Productrouter from './src/features/product/product.routes.js';
import bodyParser from 'body-parser';
import jwtAuth from './src/middleware/jwt.middleware.js';

import UserRouter from './src/user/user.routes.js';
import {connectToMongoDB}from './src/config/mongodb.js';
const server=express();

// oute using ProductController (adjust as needed)
server.use(bodyParser.json());
server.use('/api/products',jwtAuth, Productrouter);
server.use('/api/users/', UserRouter);


server.get('/', (req, res) => {
    res.send('Welcome to E-commerce APIs');
});

server.listen(3200, () => {
    console.log('Server is running at http://localhost:3200');
    connectToMongoDB();
});