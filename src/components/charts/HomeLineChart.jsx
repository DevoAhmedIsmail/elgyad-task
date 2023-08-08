import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const generateRandomData = () => {
  const data = [];
  for (let i = 0; i < 12; i++) {
    data.push({ month: i + 1, value: Math.floor(Math.random() * 100) });
  }
  return data;
};

const HomeLineChart = () => {
  const data = generateRandomData();
  const months = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];

  return (
    <ResponsiveContainer width="100%" height={400} sx={{"& .recharts-wrapper": {width: 0}}}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          label={{  position: 'insideBottom', offset: -9 }}
          tickFormatter={(value) => months[value - 1]} 
        />
        <YAxis label={{  angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" name="الرصيد" stroke="#3788c7" />
      </LineChart>
    </ResponsiveContainer>
  );
};


export default HomeLineChart