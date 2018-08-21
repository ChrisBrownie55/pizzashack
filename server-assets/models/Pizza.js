const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'No description.'
  },
  price: {
    type: Number,
    min: 0.01,
    required: true
  }
});

module.exports = mongoose.model('Pizza', schema);
