const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 4000;
const apiRouter = require('./routes');
const db = require('./db');
app.use(bodyParser.json());
app.use(cors());
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

app.use(apiRouter, (req, res, next) => {
    req.db = client.db('my-database');
    next();
}, apiRouter);