// import mongoose, { model } from 'mongoose';
import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  age: {
    type: String,
    required: false,
  },

  notes: {
    type: String,
    required: false,
  },
});

const UserModel = mongoose.model('users', UserSchema);
export default UserModel;

// module.export = UserModel;
// export default mongoose.model('users', UserSchema);
