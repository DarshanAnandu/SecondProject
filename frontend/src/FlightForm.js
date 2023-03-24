import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './FlightForm.css';

const FlightForm = () => {
    const [flightNumber, setFlightNumber] = useState('');
    const [airline, setAirline] = useState('');
    const [destination, setDestination] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [terminal, setTerminal] = useState('');
    const [gateNumber, setGateNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Save form data to MongoDB using NodeJS and ExpressJS
        console.log(`Flight Number: ${flightNumber}`);
        console.log(`Airline: ${airline}`);
        console.log(`Destination: ${destination}`);
        console.log(`Departure Time: ${departureTime}`);
        console.log(`Terminal: ${terminal}`);
        console.log(`Gate Number: ${gateNumber}`);
    };

    const handleCancel = () => {
        setFlightNumber('');
        setAirline('');
        setDestination('');
        setDepartureTime('');
        setTerminal('');
        setGateNumber('');
    };

    const handleSubmit2 = (event) => {
        event.preventDefault();
        // Send the form data to the server
        fetch('/flights', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                flightNumber,
                airline,
                destination,
                departureTime,
                terminal,
                gateNumber,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Flight saved!');
                    handleCancel();
                } else {
                    console.error('Error saving flight:', response.status);
                }
            })
            .catch((error) => {
                console.error('Error saving flight:', error);
            });
    };



    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="flightNumber">
                <Form.Label>Flight Number</Form.Label>
                <Form.Control
                    type="text"
                    maxLength={10}
                    value={flightNumber}
                    onChange={(event) => setFlightNumber(event.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="airline">
                <Form.Label>Airline</Form.Label>
                <Form.Control
                    type="text"
                    maxLength={20}
                    value={airline}
                    onChange={(event) => setAirline(event.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="destination">
                <Form.Label>Destination</Form.Label>
                <Form.Control
                    type="text"
                    maxLength={50}
                    value={destination}
                    onChange={(event) => setDestination(event.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="departureTime">
                <Form.Label>Departure Time</Form.Label>
                <Form.Control
                    type="text"
                    maxLength={10}
                    value={departureTime}
                    onChange={(event) => setDepartureTime(event.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="terminal">
                <Form.Label>Terminal</Form.Label>
                <Form.Control
                    type="text"
                    maxLength={2}
                    value={terminal}
                    onChange={(event) => setTerminal(event.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="gateNumber">
                <Form.Label>Gate Number</Form.Label>
                <Form.Control
                    type="text"
                    maxLength={2}
                    value={gateNumber}
                    onChange={(event) => setGateNumber(event.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="me-2" onClick={handleSubmit2}>
                Save
            </Button>
            <Button variant="secondary" onClick={handleCancel}>
                Cancel
            </Button>
            <Button variant="third" >
                View
            </Button>
        </Form>
    );
};

export default FlightForm;
