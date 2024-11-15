import express from 'express'
import { register, login, verifyEmail, logout, forgotPassword, resetPassword } from "../controllers/userController.js";
import { isAuthenticated } from '../middlewares/auth.js';

// Create a new router
const userRouter = express.Router();

// Define routes
userRouter.post('/register', register);
userRouter.get('/verify-email', verifyEmail);
userRouter.post('/login', login);
userRouter.get('/logout', isAuthenticated, logout);

userRouter.post('/forgot-password', forgotPassword);
userRouter.post('/reset-password/:token', resetPassword);

export default userRouter;