import express from 'express';
import Product from '../models/productModels';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
});
