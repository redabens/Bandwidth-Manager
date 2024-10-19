import React from 'react';
import ActivitiesContainer from './ActivitiesContainer'; // Adjust the import based on your file structure
import NetworkUsage from './NetworkUsage';

const RightBar = () => {
  return (
    <div className="w-full h-full right-0 top-0 p-[1rem] gap-[1rem] border-l border-black-10 opacity-100">
      {/* Activities Container */}
      <ActivitiesContainer />

      {/* Network Usage Section */}
      <div className="w-[15.5rem] h-[19.125rem] rounded-lg p-4 mt-[1rem] opacity-100">
        <div className="h-full flex items-center justify-center text-gray-500">
          <NetworkUsage />
        </div>
      </div>
    </div>
  );
};

export default RightBar;

