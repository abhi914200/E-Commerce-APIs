import UserModel from './user.model.js';
import jwt from 'jsonwebtoken';

export default class UserController{
    signUp(req,res){
        const{name,email,password,type}=req.body;
        const user=UserModel.signUp(name,email,password,type);
        res.status(201).send(user);
    }
    signIn(req,res){
        console.log(req.body);
        const {email,password}=req.body;
        const user=UserModel.signIn(email,password);
        if(!user){
            return res.status(401).send("Incorrect Credentials");
        }
        else{
 //1.Create a token
    const token=jwt.sign({
       userID:user.id,
       email:user.email
    },
    'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
    {
        expiresIn:"1h",
    }

  );

  //2.send the token to the user
  return res.status(200).send(token);
  }
       
    }
}


    