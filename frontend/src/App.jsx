// src/App.jsx
import React from 'react';
import RoutePage from './layout.jsx'; // Ensure this import matches the correct path
import DashboardPage from './pages/DashboardPage'; // Ensure this import matches the correct path
import BandwidthChart from './components/Graphs/BandwidthChart';


const App = () => {
  return (
    <div className="app">
      <RoutePage />
    </div>
  );
};

export default App;
