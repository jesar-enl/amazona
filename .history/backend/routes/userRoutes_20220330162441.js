import express from 'express';
import from 'express';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if(user) {
      if(bcrypt.compareSync(req.body.password, user.password)){

      }
    } res.status(401).send({message: 'Invalid email or password'})
  })
);

export default userRouter;
