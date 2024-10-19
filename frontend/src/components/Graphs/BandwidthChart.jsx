import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Example data for 4 users
const data = [
  { time: '10:00', user1: 400, user2: 300, user3: 200, user4: 278 },
  { time: '10:10', user1: 500, user2: 400, user3: 300, user4: 389 },
  { time: '10:20', user1: 200, user2: 300, user3: 400, user4: 450 },
  { time: '10:30', user1: 278, user2: 189, user3: 390, user4: 400 },
  { time: '10:40', user1: 189, user2: 320, user3: 450, user4: 410 },
  { time: '10:50', user1: 239, user2: 380, user3: 240, user4: 460 },
];

const BandwidthChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        
        <XAxis dataKey="time" axisLine={false} tickLine={false}/>
        <YAxis axisLine={false} tickLine={false}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="user1" stroke="#A1E3CB" />
        <Line type="monotone" dataKey="user2" stroke="#1C1C1C" />
        <Line type="monotone" dataKey="user3" stroke="#95A4FC" />
        <Line type="monotone" dataKey="user4" stroke="#B1E3FF" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BandwidthChart;