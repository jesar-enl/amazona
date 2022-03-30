import express from 'express';

const userRouter = express.Router();

userRouter.post('/signin', expressAsyncHandler(async))
export default userRouter;
