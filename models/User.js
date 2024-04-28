const { Schema, model } = require("mongoose");

const schema = new Schema({
  email: String,
  password: String,
  names: {
    liked: [{name: String}],
    unliked: [{name: String}],
  }
});

module.exports = model("User", schema);
