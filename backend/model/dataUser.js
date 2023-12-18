const mongoose = require('mongoose')
const { Schema } = mongoose;

const Userdata = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phonenumber: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },

});


var User = mongoose.model('user', Userdata);
module.exports = User;
