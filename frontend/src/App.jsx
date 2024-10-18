// src/App.jsx
import React from 'react';
import DashboardPage from './pages/DashboardPage'; // Ensure this import matches the correct path

const App = () => {
  return (
    <div className="app">
      <DashboardPage /> {/* Show only the Users Page */}
    </div>
  );
};

export default App;
