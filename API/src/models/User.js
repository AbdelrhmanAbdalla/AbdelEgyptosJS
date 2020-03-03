import mongoose from 'mongoose';

//Création du schema User
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  user_role:{
    type: Number,
    default: 0
  }
});

const User = mongoose.model('User', userSchema);
export default User;