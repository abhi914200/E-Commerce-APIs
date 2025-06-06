import  express from 'express';

import UserController from './user.controller.js';

const userController=new UserController();
const UserRouter=express.Router();

UserRouter.post('/signup',(req,res)=>
    userController.signUp(req,res)
);
UserRouter.post('/signin',
    (req,res)=>userController.signIn(req,res));



export default UserRouter;