require('dotenv').config({ path: '.env.production' });
const express = require('express');
const app = express();
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/build'));
app.use(express.static('static'));
app.use(express.static(__dirname + '/public'));

// routes
app.use("/auth", require("./routes/auth.routes"));
app.use("/names", require("./routes/names.rotes"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

async function start() {
    try {
        // connect to mongoose DB
        await mongoose.connect(process.env.mongodb);
        console.log("connect to database");

        //run server
        app.listen(PORT, () => {
            console.log(`http://localhost:4000/`);
            console.log(`server started on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start();