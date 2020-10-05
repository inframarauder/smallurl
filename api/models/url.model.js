const mongoose = require('mongoose');
const shortid = require('shortid');

const urlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true, unique: true },
  shortUrl: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  clicks: { type: Number },
});

urlSchema.pre('save', function (next) {
  if (this.isNew) {
    this.shortUrl = shortid.generate();
  }
  return next();
});

module.exports = mongoose.model('Url', urlSchema);
