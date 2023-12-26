const express = require('express');
const app = express();
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(express.static(__dirname + '/build'));
app.use(express.static('static'));
app.use(express.static(__dirname + '/public'));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

async function start() {
    try {
       // connect to mongoose DB
        mongoose.connect(
          "mongodb+srv://yurii-serdiuk:nRw7QyKxLI8rrpfV@choose-name.8qehrew.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("connect to database");

        //run server
        app.listen(PORT,()=>{
            console.log(`http://localhost:4000/`);
            console.log(`server started on port ${PORT}`);
        }) ;
    }catch (e) {
        console.log(e);
    }
}

start();