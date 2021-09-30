var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
  userRole: String,
});

module.exports.userSchema = userSchema;
