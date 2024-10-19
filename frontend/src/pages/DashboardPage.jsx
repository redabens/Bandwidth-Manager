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
      
      <div className="grid grid-cols-2 gap-[10px] mt-4 p-5" style={{
        minHeight:"470px",
        minWidth:"970px"
      }}>
        <div className="bg-custom-gray rounded-lg p-4 bg-[#F7F9FB] text-black font-bold text-xl" style={{ 
          minWidth: "480px",  // Taille minimale pour le div principal
          minHeight: "520px"  // Hauteur minimale pour le div principal
        }}>
          <NetTopology />
        </div>
        <div className="bg-custom-gray rounded-lg p-4 bg-[#F7F9FB] text-black font-bold text-xl flex items-center justify-content" style={{ 
          minWidth: "480px",  // Taille minimale pour le div principal
          minHeight: "520px"  // Hauteur minimale pour le div principal
        }}>
          <BandwidthDonutChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
