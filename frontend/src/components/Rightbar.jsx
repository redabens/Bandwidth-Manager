import React from 'react';

const Rightbar = () => {
  return (
    <div className="w-[15rem] h-[100%] flex flex-col gap-4 p-4 bg-gray-100 border-l border-gray-300">

      {/* Active Users (Top Section) */}
      <div className="flex flex-col items-start gap-2 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Active Users</h2>
        <ul className="flex flex-col gap-1">
          <li className="text-sm text-gray-600">User 1</li>
          <li className="text-sm text-gray-600">User 2</li>
          <li className="text-sm text-gray-600">User 3</li>
          {/* Add more users as needed */}
        </ul>
      </div>

      {/* All Users (Bottom Section) */}
      <div className="flex flex-col items-start gap-2 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">All Users</h2>
        <ul className="flex flex-col gap-1 overflow-y-auto max-h-32">
          <li className="text-sm text-gray-600">User A</li>
          <li className="text-sm text-gray-600">User B</li>
          <li className="text-sm text-gray-600">User C</li>
          <li className="text-sm text-gray-600">User D</li>
          {/* Add more users as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
