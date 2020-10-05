const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: 'Email is required!', unique: true },
  password: { type: String, required: 'Password is required!' },
});

userSchema.methods.createToken = function () {
  try {
    const { JWT_PRIVATE_KEY } = process.env;
    return jwt.sign({ _id: this._id }, JWT_PRIVATE_KEY);
  } catch (error) {
    console.error('Error in jwt generation', error);
  }
};

userSchema.pre('save', async function (next) {
  try {
    if (this.isNew) {
      const salt = await bcrypt.genSalt(12);
      this.password = await bcrypt.hash(this.password, salt);
    }

    return next();
  } catch (error) {
    console.error('Error in password hashing!', error);
  }
});
