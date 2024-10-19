import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/7 h-[64rem] p-[1rem] gap-[0.5rem] border-r border-gray-300 opacity-100">
      <h2 className="text-lg font-bold mb-4">MARN Stack</h2>
      <ul className="space-y-2">
        <li>Dashboards</li>
        <li>Overview</li>
        <li>Bandwidth Track</li>
      </ul>
    </div>
  );
};

export default Sidebar;
