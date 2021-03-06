import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  e: { type: Number, required: true },
});
