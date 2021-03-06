import express from 'express';
import Product from '../models/productModels.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdProducts = await Product.insertMany(data.user);
  res.send({ createdProducts });
});
export default seedRouter;
