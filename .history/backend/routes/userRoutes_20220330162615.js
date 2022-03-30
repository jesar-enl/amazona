import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user.id,
          name: user.name,
        });
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);

export default userRouter;
