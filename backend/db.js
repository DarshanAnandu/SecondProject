const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Bigil:12345abcde6789@leo.alqcopa.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
