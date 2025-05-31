//Manage routes/paths to ProductController

//1.Import express
import express from 'express';
import ProductController from './product.controller.js';
import {upload} from '../../middleware/fileupload.middleware.js'


const productController=new ProductController();

2.//initialize the express router
  const Productrouter =express.Router(); 
  Productrouter.post("/rate",productController.rateProduct);

  //All the paths to controller methods 
  //localhost:3200/api/products/filter?minPrice=10&maxPrice=100&category=clothing
  Productrouter.get(
    '/filter',
    productController.filterProducts
  );
  Productrouter.get('/',productController.getAllProducts);
  Productrouter.post("/",upload.single('imageUrl'),productController.addProduct);
  Productrouter.get(
    "/:id",
    productController.getOneProduct
  );
  

export default Productrouter;