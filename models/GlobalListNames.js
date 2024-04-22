const { Schema, model } = require("mongoose");


const schema = new Schema({
    id: String,
    children: {
        male: [String],
        female: [String]
    },
});

module.exports = model("GlobalNameList", schema);