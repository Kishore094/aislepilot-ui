import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  PieChart, Pie, Cell
} from 'recharts';

const forecastData = [
  { name: 'Mon', Rainy: 80, Sunny: 40 },
  { name: 'Tue', Rainy: 90, Sunny: 50 },
  { name: 'Wed', Rainy: 85, Sunny: 55 },
  { name: 'Thu', Rainy: 95, Sunny: 60 },
  { name: 'Fri', Rainy: 70, Sunny: 45 },
  { name: 'Sat', Rainy: 100, Sunny: 70 },
  { name: 'Sun', Rainy: 90, Sunny: 60 },
];

const donutData = [
  { name: 'Soft Drinks', value: 120 },
  { name: 'Ice Cream', value: 55 },
  { name: 'Salads', value: 70 },
];
const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

export default function AdvancedForecasts() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Weather-Based Forecast</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={forecastData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Rainy" stroke="#8884d8" />
            <Line type="monotone" dataKey="Sunny" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <h2 className="text-xl font-bold my-4">Suggested Stocking Plan</h2>
      <table className="min-w-full text-left mb-4">
        <thead>
          <tr>
            <th>Product</th><th>Reason</th><th>Suggested Qty</th><th>Confidence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Soft Drinks</td><td>Hot weather + promo</td><td>120</td><td style={{ color: 'green' }}>High</td>
          </tr>
          <tr>
            <td>Ice Cream</td><td>Warm trend</td><td>55</td><td style={{ color: 'orange' }}>Medium</td>
          </tr>
          <tr>
            <td>Salads</td><td>Sunny weekend</td><td>70</td><td style={{ color: 'red' }}>Low</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-xl font-bold my-4">Category Breakdown</h2>
      <div style={{ width: 300, height: 250 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={donutData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              label
            >
              {donutData.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
