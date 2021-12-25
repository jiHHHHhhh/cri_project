const express = require("express");
const app = express();

app.listen(3001, () =>{
    console.log("started");
});

app.get('/', (req, res) => {
    res.send("glgl");
});


app.get('/', (req, res) => {
    res.send("glgl");
});