import  express from 'express';

import UserController from './user.controller.js';

const userController=new UserController();
const UserRouter=express.Router();

UserRouter.post('/signup',userController.signUp);
UserRouter.post('/signin',userController.signIn);



export default UserRouter;