import express from 'express';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if(user) {
      
    }
  })
);

export default userRouter;
