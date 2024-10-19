import React from 'react';

const Header = () => {
  return (
    <div className="w-[65.3rem] h-[4.25rem] flex justify-between items-center p-5 border-b border-gray-300 opacity-100">
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
        {/* Search Bar */}
        <div className="relative w-[10rem] h-[1.75rem]">
          {/* Search Bar Input */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full p-[0.25rem] px-[2.5rem] rounded-[0.5rem] bg-gray-100"
          />
 
          {/* Magnifying Glass Icon (loop) */}
          <img
            src="/assets/loop.png"
            alt="Search"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-[1rem] h-[1rem]"
            style={{ marginRight: 0 }}
          />

          {/* Thingy Icon at the end */}
          <img
            src="/assets/thingy.png"
            alt="Thingy"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-[1.5rem] h-[1.5rem]"
          />
        </div>
        {/* Sun and Bell Icons */}
        <div className="flex items-center gap-2">
          {/* Sun Icon */}
            <img
              src="/assets/sun.png"
              alt="Sun"
              className="w-[1.75rem] h-[1.75rem]"
            />

          {/* Bell Icon */}
            <img
            src="/assets/bell.png"
            alt="Bell"
            className="w-[1.75rem] h-[1.75rem]"
            />
        </div>
      </div>
    </div>
  );
};

export default Header;
