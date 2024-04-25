const {Schema, model} = require("mongoose");


const schema = new Schema({
  id: String,
  children: {
    male: [{name: String}],
    female: [{name: String}]
  },
});

module.exports = model("GlobalNameList", schema);