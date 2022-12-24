import mongoose from 'mongoose';
import db from '../db/config';

const survivorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  lastLocation: String,
  infected: Boolean
});

const Survivor = db.model('Survivor', survivorSchema);

export { Survivor }
