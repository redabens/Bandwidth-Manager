import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// Example data for 4 users
const data = [
  { name: 'User 1', value: 239 },
  { name: 'User 2', value: 380 },
  { name: 'User 3', value: 240 },
  { name: 'User 4', value: 460 },
];

// Colors for each user segment
const COLORS = ['#A1E3CB', '#1C1C1C', '#95A4FC', '#B1E3FF'];

const BandwidthDonutChart = () => {
  return (
    <ResponsiveContainer width="50%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%" 
          cy="50%"
          innerRadius={43} // Inner radius to create the donut hole
          outerRadius={80} // Outer radius of the pie chart
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value" // Data key to represent bandwidth usage
          cornerRadius={4}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default BandwidthDonutChart;
