import React from 'react';

const Header = () => {
  return (
    <div className="w-[61.5rem] h-[4.25rem] flex justify-between items-center p-5 border-b border-gray-300 opacity-100">
      <div className="flex items-center gap-2">
        <span className="w-[6.125rem] h-[1.75rem] flex justify-center items-center bg-transparent text-gray-300 text-[0.875rem] font-normal leading-[1.25rem] rounded-[0.5rem] opacity-100 p-1">
          Dashboards
        </span>
        <span className="w-[0.3125rem] h-[1.25rem] flex justify-center items-center text-gray-300 text-[0.875rem] opacity-100">
          /
        </span>
        <span className="w-[4.0625rem] h-[1.75rem] flex justify-center items-center bg-transparent text-black text-[0.875rem] font-normal leading-[1.25rem] rounded-[0.5rem] opacity-100 p-1">
          Default
        </span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5 w-[15.25rem] h-[1.75rem] opacity-100">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow h-[1.75rem] p-2 rounded-[0.5rem] border border-gray-300"
          />
          <button className="w-[1.75rem] h-[1.75rem] flex justify-center items-center rounded-[0.5rem] opacity-100" title="Toggle theme">
            🌞
          </button>
          <button className="w-[1.75rem] h-[1.75rem] flex justify-center items-center rounded-[0.5rem] opacity-100" title="Notifications">
            🔔
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
