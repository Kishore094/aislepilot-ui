import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";

// Example forecast data
const data = [
  { name: 'Soft Drinks', sales: 320, forecast: 350 },
  { name: 'Ice Cream', sales: 180, forecast: 220 },
  { name: 'Snacks', sales: 400, forecast: 380 },
  { name: 'Bakery', sales: 190, forecast: 205 },
  { name: 'Dairy', sales: 230, forecast: 240 },
];

export default function Forecasts() {
  return (
    <div className="max-w-4xl mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Forecasts</h1>

      {/* Forecast Bar Chart */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Category Sales Forecast</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 16, right: 16, left: 8, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#60a5fa" name="Actual Sales" />
            <Bar dataKey="forecast" fill="#34d399" name="Forecast" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Forecast Summary Table */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
        <h3 className="text-lg font-bold mb-4">Forecast Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Actual Sales</th>
                <th className="p-2 text-left">Forecast</th>
              </tr>
            </thead>
            <tbody>
              {data.map(row => (
                <tr key={row.name} className="border-b border-gray-200 dark:border-gray-800">
                  <td className="p-2">{row.name}</td>
                  <td className="p-2">{row.sales}</td>
                  <td className="p-2">{row.forecast}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
