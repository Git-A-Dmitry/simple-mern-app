import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();

import mongoose from 'mongoose';
import UserModel from './models/Users.js';

import cors from 'cors';

app.use(express.json());
app.use(cors());

const API_KEY = process.env.REACT_APP_API_KEY;

mongoose.set('strictQuery', false);

mongoose.connect(`mongodb+srv://todoAppUser:${API_KEY}@cluster-a.j5utn.mongodb.net/mern_tutorial?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/getUsers', (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.post('/createUser', async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});

app.listen(3001, () => {
  console.log('Server runs on port:3001');
});
