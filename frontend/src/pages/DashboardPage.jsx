import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Rightbar from '../components/Rightbar';
import BandwidthChart from '../components/BandwidthChart';
import BandwidthDonutChart from '../components/BandwidthDonut';
import CardVect from '../components/CardVect';
import NetTopology from '../components/NetTopology';
const DashboardPage = () => {
  return (
    <div className="w-full flex-1 p-4">
      <div>
        <CardVect/>
      </div>
      <div className="bg-custom-gray rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">Bandwidth Chart</h2>
        <BandwidthChart />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-custom-gray rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Visualization of network topology</h2>
          <NetTopology />
        </div>
        <div className="bg-custom-gray rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">Current Bandwidth Usage</h2>
          <BandwidthDonutChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
