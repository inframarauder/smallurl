const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({ error: 'This email is already registered!' });
    } else {
      user = await new User(req.body).save();
      const token = user.createToken();
      return res.status(201).json({ token, email: user.email });
    }
  } catch (error) {
    console.error('Error in signup', error);
    return res.status(500).json({ error: 'Internal server error!' });
  }
};

exports.login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ error: 'User not found!' });
    } else {
      let valid = await bcrypt.compare(req.body.password, user.password);
      if (valid) {
        const token = user.createToken();
        return res.status(200).json({ token, email: user.email });
      } else {
        return res.status(401).json({ error: 'Passwords do not match!' });
      }
    }
  } catch (error) {
    console.error('Error in login!', error);
    return res.status(500).json({ error: 'Internal server error!' });
  }
};
