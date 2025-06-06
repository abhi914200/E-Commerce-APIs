
import {user} from '../../user/user.model.js';
export default class ProductModel {
    constructor(id, name, description, price, category, sizes) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.sizes = sizes;
    }

    static getAllProducts() {
        return products;
    }
    static add(product) {
        product.id = products.length + 1;
        products.push(product);
        return product;
    }
    static get(id) {
        return products.find(i => i.id == id);
    }
    static filter(minPrice, maxPrice, category) {
        const product = products.filter(i =>
            (!minPrice || i.price >= minPrice) &&
            (!maxPrice || i.price <= maxPrice) &&
            (!category || i.category.toLowerCase() == category.toLowerCase())
        )
        return product;
    }
    static rateProduct(UserId, ProductId, rating) {
        // 1. Validate user
        const founduser = user.find(u => u.id == UserId);
        if (!founduser) {
            return "User not found";
        }
        // 2. Validate product
        const product = products.find(p => p.id === Number(ProductId));
        if (!product) {
            return "Product not found";
        }
        // 3. Add or update rating
        if (!product.ratings) {
            product.ratings = [];
           product.ratings.push({
            UserId:UserId,
            rating:rating
           })
        
        }else {
            
            const existingRating=product.ratings.find(r=>r.UserId==UserId);
            if(existingRating){
                existingRating.rating=rating;
            }
            else{
                product.ratings.push({
                    UserId:UserId,
                    rating:rating
                })
            }
        }
        
    }
}

var products = [
    new ProductModel(1, "T-Shirt", "A comfortable cotton t-shirt", 19.99, "Clothing", ["S", "M", "L", "XL"]),
    new ProductModel(2, "Sneakers", "Stylish running sneakers", 49.99, "Footwear", ["7", "8", "9", "10"]),
    new ProductModel(3, "Backpack", "Durable and spacious backpack", 29.99, "Accessories", ["One Size"]),
    new ProductModel(4, "Smartphone", "Latest model with advanced features", 699.99, "Electronics", ["128GB", "256GB"]),
    new ProductModel(5, "Wristwatch", "Elegant analog wristwatch", 99.99, "Accessories", ["One Size"])
];

