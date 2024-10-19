// src/pages/DashboardPage.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Rightbar from '../components/Rightbar';
import BandwidthChart from '../components/Graphs/BandwidthChart';
import BandwidthDonutChart from '../components/Graphs/BandwidthDonut';
import TrafficHistogram from '../components/Graphs/BandwidthHist';

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-1">
          <div className="w-full p-[1rem]">
            {/* here will be shown the graph section */}
            <div className="bg-custom-gray m-[0.5rem] rounded-[0.5rem] p-[1rem]">
              <BandwidthChart />
            </div>
            
            <div className="flex justify-between">
              <div className="w-[30rem] bg-custom-gray m-[0.5rem] rounded-[0.5rem] p-[1rem]">
                <TrafficHistogram />
              </div>
              <div className="w-[30rem] bg-custom-gray m-[0.5rem] rounded-[0.5rem] p-[1rem]">
                <BandwidthDonutChart />
              </div>
            </div>
          </div>
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
