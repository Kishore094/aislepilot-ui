import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";

// Data for the Weather-Based Forecast Chart
const forecastData = [
  { day: "Mon", Rainy: 80, Sunny: 40 },
  { day: "Tue", Rainy: 90, Sunny: 50 },
  { day: "Wed", Rainy: 85, Sunny: 55 },
  { day: "Thu", Rainy: 95, Sunny: 60 },
  { day: "Fri", Rainy: 70, Sunny: 45 },
  { day: "Sat", Rainy: 100, Sunny: 70 },
  { day: "Sun", Rainy: 90, Sunny: 60 },
];

// Data for Suggested Stocking Plan
const stockingPlan = [
  { product: "Soft Drinks", reason: "Hot weather + promo", qty: 120, confidence: "High" },
  { product: "Ice Cream", reason: "Warm trend", qty: 55, confidence: "Medium" },
  { product: "Salads", reason: "Sunny weekend", qty: 70, confidence: "Low" },
];

// Donut chart data and colors
const donutData = [
  { name: "Soft Drinks", value: 40 },
  { name: "Ice Cream", value: 35 },
  { name: "Salads", value: 25 },
];
const donutColors = ["#60a5fa", "#fbbf24", "#34d399"];

// Tabs
const scenarioTabs = [
  "Weather Impact",
  "Seasonal Trends",
  "Holiday Stocking"
];

// Confidence color map
const confidenceColors = {
  High: "text-green-600",
  Medium: "text-yellow-600",
  Low: "text-red-600"
};

export default function AdvancedForecasts() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col gap-8">
      {/* Tabs */}
      <div className="flex gap-3 mb-2">
        {scenarioTabs.map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full transition font-semibold
              ${activeTab === i
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-gray-700"}
            `}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Inventory Risk Alert */}
      <div className="bg-red-600 text-white p-3 rounded-lg flex items-center font-semibold mb-4">
        <span className="mr-2 text-xl">⚠️</span>
        Inventory Risk: <span className="ml-2 font-normal">Soft Drinks may sell out on Bank Holiday!</span>
      </div>

      {/* Weather-Based Forecast Chart */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Weather-Based Forecast</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={forecastData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Rainy" stroke="#818cf8" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="Sunny" stroke="#34d399" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Suggested Stocking Plan & Category Breakdown */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Stocking Plan Table */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">Suggested Stocking Plan</h3>
            <div>
              <button className="bg-blue-600 text-white px-4 py-1 rounded-lg font-semibold mr-2">Download CSV</button>
              <button className="bg-green-500 text-white px-4 py-1 rounded-lg font-semibold">Create PO</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="p-2 text-left">Product</th>
                  <th className="p-2 text-left">Reason</th>
                  <th className="p-2 text-left">Suggested Qty</th>
                  <th className="p-2 text-left">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {stockingPlan.map((row, i) => (
                  <tr key={row.product} className={i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}>
                    <td className="p-2">{row.product}</td>
                    <td className="p-2">{row.reason}</td>
                    <td className="p-2 font-semibold">{row.qty}</td>
                    <td className={`p-2 font-bold ${confidenceColors[row.confidence]}`}>{row.confidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Donut Chart */}
        <div className="w-full md:w-80 flex flex-col items-center">
          <h3 className="text-lg font-bold mb-3">Category Breakdown</h3>
          <ResponsiveContainer width={220} height={220}>
            <PieChart>
              <Pie
                data={donutData}
                dataKey="value"
                nameKey="name"
                cx="50%" cy="50%"
                innerRadius={60}
                outerRadius={90}
                fill="#8884d8"
                label={({ name, percent }) => `${name} (${Math.round(percent * 100)}%)`}
              >
                {donutData.map((entry, idx) => (
                  <Cell key={entry.name} fill={donutColors[idx % donutColors.length]} />
                ))}
              </Pie>
              <Legend layout="vertical" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
