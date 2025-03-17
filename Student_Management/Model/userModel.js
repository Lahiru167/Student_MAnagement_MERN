const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
  StudentId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },

  Age: {
    type: Number,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("userModel", userSchema);