const mongoose = require("mongoose");

const transectionModel = new mongoose.Schema({
  _toAddress: {
    type: String,
    required: [true, "address not found "],
  },
  _amount: {
    type: String,
    required: [true, "amount not found "],
  }
});

module.exports = mongoose.model("transectionModel", transectionModel);
