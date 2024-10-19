import React from 'react';

const StatCard = ({ title, number, percentage, isPositive, upArrowSrc, downArrowSrc }) => {
  return (
    <div className="min-w-[200px] w-full h-[112px] p-6 gap-2 rounded-lg opacity-100 bg-white shadow-md flex flex-col justify-between">
      {/* Title */}
      <div className="flex flex-col gap-0">
        <span className="text-gray-500 text-sm">{title}</span>
      </div>

      {/* Number and Percentage */}
      <div className="flex justify-between items-center">
        {/* Number */}
        <span className="text-2xl font-bold">{number.toLocaleString()}</span>

        {/* Percentage with Image Icon */}
        <div className="flex items-center gap-1">
          {isPositive ? (
            <img src={upArrowSrc} alt="Up Arrow" className="w-4 h-4" />
          ) : (
            <img src={downArrowSrc} alt="Down Arrow" className="w-4 h-4" />
          )}
          <span className={`${isPositive ? 'text-green-500' : 'text-red-500'} text-sm`}>
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
