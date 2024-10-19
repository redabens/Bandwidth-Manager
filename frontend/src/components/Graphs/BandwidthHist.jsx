import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Example data
const data = [
  { user: 'User 1', traffic: 400 },
  { user: 'User 2', traffic: 300 },
  { user: 'User 3', traffic: 500 },
  { user: 'User 4', traffic: 200 },
];

const TrafficHistogram = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        {/* X-Axis for users */}
        <XAxis dataKey="user" axisLine={false} tickLine={false} />

        {/* Y-Axis for traffic values */}
        <YAxis axisLine={false} tickLine={false} />

        {/* Tooltip for hover info */}
        <Tooltip />

        {/* Legend (optional, if you want to show names of series) */}
        <Legend />

        {/* Bars for each user's traffic */}
        <Bar dataKey="traffic" fill="#8884d8" radius={[10, 10, 10, 10]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TrafficHistogram;
