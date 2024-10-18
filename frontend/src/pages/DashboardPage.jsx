// src/pages/DashboardPage.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Rightbar from '../components/Rightbar';

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-1">
          <div className="w-full p-4">
            {/* here will be shown the graph section */}
          </div>
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
