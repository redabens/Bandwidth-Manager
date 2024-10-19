// src/App.jsx
import React from 'react';
import RoutePage from './layout.jsx'; // Ensure this import matches the correct path
import DashboardPage from './pages/DashboardPage'; // Ensure this import matches the correct path
import BandwidthChart from './components/BandwidthChart';


const App = () => {
  return (
    <div className="app">
      <RoutePage /> {/* Show only the Users Page */}
      <DashboardPage />
    </div>
  );
};

export default App;
