import express from 'express';
import { loginuser, registeruser, adminlogin, addToCart, getUserCart, getUserProfile } from '../controller/userController.js';
import authUser from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registeruser);
userRouter.post('/login', loginuser);
userRouter.post('/adminlogin', adminlogin);
userRouter.post('/add-to-cart', authUser, addToCart);
userRouter.get('/get-cart', authUser, getUserCart);
userRouter.get('/profile', authUser, getUserProfile);

export default userRouter;