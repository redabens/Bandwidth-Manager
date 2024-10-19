import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Rightbar from '../components/Rightbar';
import BandwidthChart from '../components/Graphs/BandwidthChart';
import BandwidthDonutChart from '../components/Graphs/BandwidthDonut';
import CardVect from '../components/CardVect';
import NetTopology from '../components/Graphs/NetTopology';
const DashboardPage = () => {
  return (
    <div class="flex w-full">
        <Sidebar/>
      <div class="flex-1">
        <Header/>
        <div class="flex-1 p-4">
          <div>
            <CardVect/>
          </div>
          <div class="bg-custom-gray rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Bandwidth Chart</h2>
            <BandwidthChart />
          </div>
          
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-custom-gray rounded-lg p-4">
              <NetTopology />
            </div>
            <div class="bg-custom-gray rounded-lg p-4">
              <BandwidthDonutChart />
            </div>
          </div>
        </div>

      </div>
      <div class="w-1/5 ">
        <Rightbar/>
      </div>
    </div>
  );
};

export default DashboardPage;
