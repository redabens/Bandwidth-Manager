// src/App.jsx
import React from 'react';
import DashboardPage from './pages/DashboardPage'; // Ensure this import matches the correct path
import BandwidthChart from './components/BandwidthChart';

const App = () => {
  return (
    <div className="app">
      <DashboardPage />
    </div>
  );
};

export default App;
