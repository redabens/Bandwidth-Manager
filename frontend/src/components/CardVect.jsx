import React from 'react';
import StatCard from './StatCard';
import upArrow from '/assets/VectorUp.png'; // Adjust paths according to your project structure
import downArrow from '/assets/VectorDown.png';

const CardVect = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-7">
      <StatCard 
        title="Views" 
        number={12345} 
        percentage={5.4} 
        isPositive={true} 
        upArrowSrc={upArrow} 
        downArrowSrc={downArrow}
      />
      <StatCard 
        title="Subscribers" 
        number={9876} 
        percentage={-2.3} 
        isPositive={false} 
        upArrowSrc={upArrow} 
        downArrowSrc={downArrow}
      />
      <StatCard 
        title="New Users" 
        number={12345} 
        percentage={5.4} 
        isPositive={true} 
        upArrowSrc={upArrow} 
        downArrowSrc={downArrow}
      />
      <StatCard 
        title="Active Users" 
        number={156} 
        percentage={+15.3} 
        isPositive={false} 
        upArrowSrc={upArrow} 
        downArrowSrc={downArrow}
      />
    </div>
  );
};

export default CardVect;
