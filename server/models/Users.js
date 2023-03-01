import mongoose from 'mongoose';

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
