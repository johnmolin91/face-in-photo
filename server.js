const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const router = require("express").Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
    console.log(`Now listening on PORT ${PORT}!`);
});