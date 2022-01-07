const mongoose = require("mongoose");

const banksSchema = mongoose.Schema({
  aadhar: {
    type: String,
    required: true,
    },
    aadharback: {
    type: String,
    required: true,
    },
    phone: {
    type: String,
    required: true,
    },
    pan: {
    type: String,
    required: true,
    },
     rent: {
    type: String,
    required: true,
    },
     bs: {
    type: String,
    required: true,
    },
     sp: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  officeaddr: {
    type: String,
    required: true,
  },
  business: {
    type: String,
    required: true,
  },
  refimg: {
    type: String,
    required: true,
  },
 

});

module.exports = mongoose.model("Banks", banksSchema);
