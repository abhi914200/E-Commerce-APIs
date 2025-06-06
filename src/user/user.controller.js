import UserModel from './user.model.js';
import jwt from 'jsonwebtoken';
import UserRepository from './user.repository.js';

export default class UserController{

    constructor(){
        this.userRepository=new UserRepository();
    }


   async signUp(req,res){
        const{name,email,password,type}=req.body;
        const newUser=new UserModel(name,email,password,type);
        const user= await this.userRepository.signUp(newUser);
        res.status(201).send(user);
    }
  async signIn(req,res){
        console.log(req.body);
        const {email,password}=req.body;
        const user=await this.userRepository.signIn(email,password);
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


    