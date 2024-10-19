import React from 'react';

const UserEntry = ({ imageSrc, userName }) => {
  return (
    <div className="w-[15.5rem] h-[2.5rem] p-2 flex items-center gap-2 rounded-lg mb-2 opacity-100">
      <img 
        src={imageSrc} 
        alt="User"
        className="w-[3rem] h-[3rem] rounded-full"
      />
      <span className="text-[0.875rem] font-normal">{userName}</span>
    </div>
  );
};

const NetworkUsage = () => {
  return (
    <div className="w-[15.5rem] h-[18.75rem] gap-1 opacity-100">
        <h2 className="text-lg font-bold mb-2">Network Usage</h2>
      {/* User Entries */}
      <UserEntry 
        imageSrc="/assets/usr.jpg" 
        userName="Drew Cano"
      />
      <UserEntry 
        imageSrc="/assets/usr.jpg" 
        userName="Jane Doe"
      />
      <UserEntry 
        imageSrc="/assets/usr.jpg"
        userName="John Smith"
      />

      {/* Add more users here if needed */}
    </div>
  );
};

export default NetworkUsage;
