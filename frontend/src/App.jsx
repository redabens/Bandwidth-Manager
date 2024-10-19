// src/App.jsx
import React from 'react';
import RoutePage from './layout.jsx'; // Ensure this import matches the correct path

const App = () => {
  return (
    <div className="app">
      <RoutePage /> {/* Show only the Users Page */}
    </div>
  );
};

export default App;
