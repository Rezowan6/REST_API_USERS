const { default: mongoose } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

let users = mongoose.Schema({
  id:{
    type: String,
    require: true
  },
  userName:{
    type: String,
    require: true
  },
  email:{
    type: String,
    require: true,
    unique: true
  },
  createdOn:{
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("users",users);
