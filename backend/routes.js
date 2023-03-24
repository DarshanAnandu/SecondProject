// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const app = express();
// const PORT = process.env.PORT || 4000;
// const apiRouter = require('./routes');
// const db = require('./db');
//
// app.use(bodyParser.json());
// app.use(cors());
//
// mongoose.connect('mongodb+srv://Bigil:udnanADarshan@leo.alqcopa.mongodb.net/my-database?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));
//
// app.use('/api', (req, res, next) => {
//     req.db = db;
//     next();
// });
//
// app.use('/api', apiRouter);
//
// app.listen(PORT, function() {
//     console.log("Server is running on Port: " + PORT);
// });

const express = require('express');
const { ObjectId } = require('mongodb');

// Import the Flight model
const Flight = require('../frontend/src/FlightForm.js');

// Define the route to handle form submissions
app.post('/FlightForm', (req, res) => {
    // Create a new Flight document with the submitted data
    const flight = new Flight({
        flightNumber: req.body.flightNumber,
        airline: req.body.airline,
        destination: req.body.destination,
        departureTime: req.body.departureTime,
        terminal: req.body.terminal,
        gateNumber: req.body.gateNumber,
    });

    // Save the new Flight document to the database
    flight.save((err) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

// const router = express.Router();
//
// router.get('/flights', async (req, res) => {
//     const flights = await req.db.collection('flights').find().toArray();
//     res.json(flights);
// });
//
// router.post('/submit', async (req, res) => {
//     const result = await req.db.collection('flights').insertOne(req.body);
//     res.json(result.ops[0]);
// });
//
// router.delete('/flights/:id', async (req, res) => {
//     const result = await req.db.collection('flights').deleteOne({
//         _id: ObjectId(req.params.id),
//     });
//     res.json(result.deletedCount > 0);
// });
//
// module.exports = router;
