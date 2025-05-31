import ProductModel from "./product.model.js";

export default class ProductController{

  getAllProducts(req,res){
     const products=ProductModel.getAllProducts();
     res.status(200).send(products);
  }
  addProduct(req,res){
   const {name,price,sizes}=req.body;
   const newProduct={
      name,
      price:parseFloat(price),
      size:sizes.split(","),
      imageUrl:req.file.filename,
   }
  const createdRecord= ProductModel.add(newProduct);
     res.status(201).send(createdRecord);
  }
  rateProduct(req,res){
     const UserId=req.query.UserId;
     const ProductId=req.query.ProductId;
     const ratings=req.body.rating;
     const error=ProductModel.rateProduct(UserId,ProductId,ratings);
     if(error){
      res.status(400).send(error);
     }
     else{
      res.status(200).send("rating has been added");
     }
  }

  getOneProduct(req,res){
     const id=req.params.id;
     const product=ProductModel.get(id);
     if(!product){
      return res.status(404).send("Product not found");
     }
     else{
      res.status(200).send(product);
     }
  }
  filterProducts(req,res){
     const minPrice=req.query.minPrice;
     const maxPrice=req.query.maxPrice;
     const category=req.query.category;
     return res.status(200).send(ProductModel.filter(minPrice,maxPrice,category));
  }
  
} 