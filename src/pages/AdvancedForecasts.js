import React, { useState } from "react";

// --- MOCK DATA ---
const tabs = [
  "Weather Impact",
  "Seasonal Trends",
  "Holiday Stocking",
  "Scenario Comparison"
];

const kpis = [
  { label: "Weather Impact", value: "+4.2%", desc: "vs typical week" },
  { label: "Seasonal Trend", value: "-12%", desc: "vs annual avg" },
  { label: "Predicted Demand", value: "+18%", desc: "Soft drinks" },
  { label: "Confidence Level", value: "High", desc: "" }
];

const scenarios = [
  "Baseline",
  "Bank Holiday",
  "10% Promo",
  "Rainy Week"
];

const stockingPlan = [
  { product: "Soft Drinks", reason: "Hot weather + promo", qty: 120, confidence: "High" },
  { product: "Ice Cream", reason: "Warm trend", qty: 55, confidence: "Medium" },
  { product: "Salads", reason: "Sunny weekend", qty: 70, confidence: "Low" }
];

export default function AdvancedForecasts() {
  const [activeTab, setActiveTab] = useState(0);
  const [scenario, setScenario] = useState("Baseline");

  return (
    <div>
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Advanced Forecasts</h1>

      {/* Top Tabs */}
      <div className="flex gap-2 mb-6">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`px-5 py-2 rounded-t-lg font-semibold 
            ${activeTab === i
              ? "bg-blue-600 text-white dark:bg-blue-500"
              : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            } transition`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {kpis.map((kpi, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow flex flex-col items-center border border-gray-200 dark:border-gray-800"
          >
            <div className="text-xl font-bold text-gray-900 dark:text-white">{kpi.value}</div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">{kpi.label}</div>
            {kpi.desc && (
              <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{kpi.desc}</div>
            )}
          </div>
        ))}
      </div>

      {/* Scenario Selector & Inventory Risk Alert */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
        <div className="flex gap-2 items-center">
          <span className="font-semibold text-gray-900 dark:text-white">Scenario:</span>
          <select
            className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded px-3 py-1 text-gray-900 dark:text-white"
            value={scenario}
            onChange={e => setScenario(e.target.value)}
          >
            {scenarios.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>
        {/* Inventory Risk Alert */}
        <span className="ml-0 md:ml-auto px-4 py-2 rounded-lg bg-red-600 text-white font-bold flex items-center gap-2 text-sm shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.578-1.277.832-2.01L13.83 4.56c-.743-.732-1.919-.732-2.662 0L3.106 16.99c-.746.733-.222 2.01.832 2.01z" /></svg>
          Inventory Risk: Soft Drinks may sell out on Bank Holiday!
        </span>
      </div>

      {/* Forecast Chart Placeholder */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-800 mb-6">
        <div className="flex items-center mb-2">
          <span className="font-semibold text-gray-900 dark:text-white mr-2">Weather-Based Forecast</span>
          <span className="ml-auto text-xs text-gray-400">Chart overlays: holidays, promos, scenarios</span>
        </div>
        <div className="flex flex-col items-center justify-center h-48 text-gray-400 dark:text-gray-600">
          {/* Replace with real chart */}
          <svg width="280" height="100">
            <rect x="0" y="25" width="260" height="50" fill="#222a" rx="8" />
            <text x="140" y="65" textAnchor="middle" fill="#555" fontSize="18">[Line/Bar Chart]</text>
          </svg>
          <span className="text-xs mt-2 text-gray-400 dark:text-gray-600">
            (Sales forecast chart – weather, scenario, events, promo overlays)
          </span>
        </div>
      </div>

      {/* Suggested Stocking Plan */}
      <div className="flex items-center mb-2">
        <span className="font-semibold text-gray-900 dark:text-white">Suggested Stocking Plan</span>
        <button className="ml-auto px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow text-sm">
          Download CSV
        </button>
        <button className="ml-2 px-4 py-2 rounded bg-green-600 text-white font-medium hover:bg-green-700 transition shadow text-sm">
          Create PO
        </button>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow border border-gray-200 dark:border-gray-800 overflow-x-auto mb-6">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">Product</th>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">Reason</th>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold flex items-center gap-1">
                Suggested Qty
                <span className="inline-block align-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 hover:text-blue-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <title>AI Explanation</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M4 4h16v16H4V4z" />
                  </svg>
                </span>
              </th>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {stockingPlan.map((row, i) => (
              <tr key={row.product} className="border-t border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4 text-gray-900 dark:text-white">{row.product}</td>
                <td className="py-2 px-4 text-gray-900 dark:text-white">{row.reason}</td>
                <td className="py-2 px-4 text-gray-900 dark:text-white">{row.qty}</td>
                <td className="py-2 px-4 font-semibold">
                  <span className={
                    row.confidence === "High" ? "text-green-600 dark:text-green-400" :
                    row.confidence === "Medium" ? "text-yellow-600 dark:text-yellow-400" :
                    "text-red-600 dark:text-red-400"
                  }>
                    {row.confidence}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Category Drilldown (Mini Donut Chart Placeholder) */}
      <div className="flex items-center mt-4">
        <div className="font-semibold text-gray-900 dark:text-white mr-3">Category Breakdown</div>
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-400 flex items-center justify-center text-sm text-white shadow">
          [Donut Chart]
        </div>
        <span className="ml-3 text-xs text-gray-400 dark:text-gray-500">(Click to drilldown)</span>
      </div>
    </div>
  );
}
