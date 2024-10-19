import React from 'react';

const UserActivity = ({ name, lastSeen }) => {
  return (
    <div className="flex items-center w-full h-[3.375rem] p-2 rounded-lg opacity-100">
      {/* User Picture */}
      <img
        src="/assets/usr.jpg" // Update with your actual user picture path
        alt={name}
        className="w-[3rem] h-[3rem] rounded-[0.5rem] mr-2 opacity-100"
      />
      {/* User Info */}
      <div className="flex flex-col">
        <span className="text-black text-[0.875rem] font-normal leading-[1.25rem] opacity-100">
          {name}
        </span>
        <span className="text-gray-400 text-[0.75rem] font-normal leading-[1.125rem] opacity-100">
          {lastSeen}
        </span>
      </div>
    </div>
  );
};

const ActivitiesContainer = () => {
  return (
    <div className="w-[15.5rem] h-[20.375rem] gap-1 opacity-100">
      <h2 className="text-lg font-bold mb-2">Activities</h2>
      {/* Example user activities */}
      <UserActivity name="Drew Cano" lastSeen="Just now" />
      {/* Add more UserActivity components as needed */}
      <UserActivity name="Jane Doe" lastSeen="5 minutes ago" />
      <UserActivity name="John Smith" lastSeen="10 minutes ago" />
    </div>
  );
};

export default ActivitiesContainer;