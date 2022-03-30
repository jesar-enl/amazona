import express from 'express';

const userRouter = express.Router();

userRouter.post('/signin', expressAsyncHandler)
export default userRouter;
