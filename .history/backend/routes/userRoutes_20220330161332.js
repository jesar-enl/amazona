import express from 'express';
import Product from '../models/productModels.js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

userRouter.get('/slug/:slug', async (req, res) => {
  const user = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});
productRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

export default productRouter;
