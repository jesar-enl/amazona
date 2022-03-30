import express from 'express';
import Product from '../models/productModels';
import data from ''

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
});
