import logo from './logo.svg';
import './App.css';
import React from 'react';
import FlightForm from './FlightForm';
import './FlightForm.css';

const App = () => {
  return (
      <div className="container mt-4">
        <h1 className="mb-4">Flight Form</h1>
        <FlightForm />
      </div>
  );
}

export default App;
