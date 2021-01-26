var mongoose = require("mongoose");

// SCHEMA SETUP
var userSchema = new mongoose.Schema({
	name: String,
 	email: String,
  username: String,
  password: String,
  dob: String,
  mobile: Number,
  level: String
});

module.exports = mongoose.model("User", userSchema);
