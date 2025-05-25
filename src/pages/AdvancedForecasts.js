import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";

// Mock Data
const scenarioTabs = [
  "Weather Impact",
  "Seasonal Trends",
  "Holiday Stocking"
];

const forecastData = [
  { day: "Mon", Rainy: 80, Sunny: 40 },import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const TABS = [
  "Weather Impact",
  "Seasonal Trends",
  "Holiday Stocking",
  "Scenario Comparison",
];

const INFO_CARDS = [
  {
    title: "Weather Impact",
    value: "+4%",
    desc: "Rainy weather is expected to increase demand compared to a sunny day",
    icon: "☁️",
  },
  {
    title: "Predicted demand",
    value: "+18%",
    desc: "Demand for soft drinks is expected to rise by 18%",
    icon: "📈",
  },
  {
    title: "Confidence Level",
    value: "High",
    desc: "",
    icon: "✅",
  },
  {
    title: "How did we forecast this?",
    value: "",
    desc: "Machine learning model uses weather and sales patterns",
    icon: "🤖",
  },
];

const CHART_DATA = [
  { day: "Mon", Rainy: 80, Sunny: 40 },
  { day: "Tue", Rainy: 90, Sunny: 50 },
  { day: "Wed", Rainy: 85, Sunny: 53 },
  { day: "Thu", Rainy: 95, Sunny: 60 },
  { day: "Fri", Rainy: 70, Sunny: 45 },
  { day: "Sat", Rainy: 100, Sunny: 70 },
  { day: "Sun", Rainy: 90, Sunny: 60 },
];

const SUGGESTED_PLAN = [
  { category: "Ice Cream", product: "Frozen", reason: "Hot weather", suggested: "+15 units" },
  { category: "Sweet Lemonade", product: "Beverages", reason: "Promo + sunny weekend", suggested: "+50 units" },
  { category: "Burger Buns", product: "Bakery", reason: "BBQ weather", suggested: "+20 units" },
];

export default function AdvancedForecasts() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="px-8 py-6">
      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              i === activeTab
                ? "bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Info cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {INFO_CARDS.map(card => (
          <div
            key={card.title}
            className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 flex flex-col items-start"
          >
            <div className="text-2xl">{card.icon}</div>
            <div className="text-xs mt-2 text-gray-500 dark:text-gray-400">{card.title}</div>
            <div className="text-xl font-bold my-2">{card.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">{card.desc}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Weather-based Forecast Chart */}
        <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">Weather-Based Forecast</h2>
            <div className="flex gap-2 text-xs text-gray-400">
              <span>Rainy</span>
              <span>Sunny</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={CHART_DATA}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Rainy" stroke="#4f8afc" strokeWidth={2} />
              <Line type="monotone" dataKey="Sunny" stroke="#44e28e" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          {/* Inventory Risk Alert */}
          <div className="mt-4 px-3 py-2 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 rounded">
            <b>Inventory Risk:</b> Soft Drinks inventory is likely to sell out on Sat!
            <button className="ml-4 px-3 py-1 bg-blue-600 text-white rounded">Create PO</button>
          </div>
        </div>
        {/* Inventory Risk Box */}
        <div className="w-full md:w-1/3 bg-white dark:bg-gray-900 rounded-xl shadow p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-bold mb-2">Inventory Risk</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Risk is likely to sell out on <b>Sat</b>
            </div>
            <button className="px-3 py-2 bg-blue-600 text-white rounded">Create PO</button>
          </div>
        </div>
      </div>

      {/* Suggested Stocking Plan */}
      <div className="mt-8 bg-white dark:bg-gray-900 rounded-xl shadow p-4">
        <h3 className="font-bold mb-3">Suggested Stocking Plan</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-gray-200 dark:border-gray-700">
              <th className="py-2">Category</th>
              <th className="py-2">Product</th>
              <th className="py-2">Reason</th>
              <th className="py-2">Suggested</th>
            </tr>
          </thead>
          <tbody>
            {SUGGESTED_PLAN.map(row => (
              <tr key={row.category} className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2">{row.category}</td>
                <td className="py-2">{row.product}</td>
                <td className="py-2">{row.reason}</td>
                <td className="py-2">{row.suggested}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

  { day: "Tue", Rainy: 90, Sunny: 50 },
  { day: "Wed", Rainy: 85, Sunny: 55 },
  { day: "Thu", Rainy: 95, Sunny: 60 },
  { day: "Fri", Rainy: 70, Sunny: 45 },
  { day: "Sat", Rainy: 100, Sunny: 70 },
  { day: "Sun", Rainy: 90, Sunny: 60 },
];

const stockingPlan = [
  { product: "Soft Drinks", reason: "Hot weather + promo", qty: 120, confidence: "High" },
  { product: "Ice Cream", reason: "Warm trend", qty: 55, confidence: "Medium" },
  { product: "Salads", reason: "Sunny weekend", qty: 70, confidence: "Low" },
];

const donutData = [
  { name: "Soft Drinks", value: 40 },
  { name: "Ice Cream", value: 35 },
  { name: "Salads", value: 25 },
];
const donutColors = ["#60a5fa", "#fbbf24", "#34d399"];

const confidenceColors = {
  High: "text-green-600",
  Medium: "text-yellow-600",
  Low: "text-red-600"
};

export default function AdvancedForecasts() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto py-6">
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
      <div className="bg-red-600 text-white p-3 rounded-lg flex items-center font-semibold mb-2">
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

      {/* Suggested Stocking Plan Table */}
      <div className="mb-10 bg-white dark:bg-gray-900 rounded-xl shadow p-6">
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

      {/* Category Breakdown Donut Chart (Only one, at the bottom) */}
      <div className="flex flex-col items-center py-8">
        <h3 className="text-lg font-bold mb-3">Category Breakdown</h3>
        <ResponsiveContainer width={320} height={220}>
          <PieChart>
            <Pie
              data={donutData}
              dataKey="value"
              nameKey="name"
              cx="50%" cy="50%"
              innerRadius={70}
              outerRadius={100}
              fill="#8884d8"
              label={({ name, percent }) => `${name} (${Math.round(percent * 100)}%)`}
            >
              {donutData.map((entry, idx) => (
                <Cell key={entry.name} fill={donutColors[idx % donutColors.length]} />
              ))}
            </Pie>
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
