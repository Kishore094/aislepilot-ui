import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Area, ReferenceDot, ResponsiveContainer,
} from "recharts";

const kpis = [
  { label: "Forecast Sales (30d)", value: "£29,120" },
  { label: "Accuracy", value: "93.1%" },
  { label: "Confidence", value: "±12%" },
  { label: "Upcoming Event", value: "Bank Holiday" },
];

const chartData = [
  { date: "Apr 28", forecast: 920, actual: 900, lower: 850, upper: 1000, event: false },
  { date: "May 5", forecast: 980, actual: 960, lower: 900, upper: 1050, event: false },
  { date: "May 12", forecast: 1060, actual: 1040, lower: 980, upper: 1130, event: false },
  { date: "May 19", forecast: 1150, actual: 1120, lower: 1060, upper: 1250, event: true },
  { date: "May 26", forecast: 1080, actual: null, lower: 950, upper: 1210, event: false },
  { date: "Jun 2", forecast: 1180, actual: null, lower: 1040, upper: 1320, event: false },
];

const forecastTable = [
  { product: "Snack Bars", forecast: 2120, actual: 2100, accuracy: "98.5%", reorder: "May 26", anomaly: false },
  { product: "Orange Juice", forecast: 1630, actual: 1490, accuracy: "91.4%", reorder: "May 22", anomaly: false },
  { product: "Bagged Salad", forecast: 1290, actual: 980, accuracy: "75.9%", reorder: "May 17", anomaly: true },
  { product: "Granola Bars", forecast: 890, actual: 895, accuracy: "99.4%", reorder: "May 29", anomaly: false },
];

const insights = [
  { type: "info", message: "Forecast high next week due to Bank Holiday" },
  { type: "warning", message: "Bagged Salad: Lower accuracy. Check stock!" },
  { type: "alert", message: "Unusual spike predicted for May 19 (see chart marker)" },
];

const scenarioOptions = [
  { label: "Baseline", value: "baseline" },
  { label: "10% Price Promo", value: "promo" },
  { label: "Rainy Weather", value: "rain" },
];

export default function Forecasts() {
  const [scenario, setScenario] = useState("baseline");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Forecasts</h1>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {kpis.map((kpi, i) => (
          <div key={i}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow flex flex-col items-center"
          >
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {kpi.value}
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">{kpi.label}</div>
          </div>
        ))}
      </div>

      {/* Scenario Analysis */}
      <div className="mb-4 flex flex-col md:flex-row md:items-center gap-2">
        <span className="font-semibold text-gray-900 dark:text-white mr-2">Scenario:</span>
        <select
          value={scenario}
          onChange={e => setScenario(e.target.value)}
          className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded px-3 py-1 text-gray-900 dark:text-white"
        >
          {scenarioOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <span className="ml-auto">
          <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition shadow">Download</button>
        </span>
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-800 mb-6">
        <div className="font-semibold mb-3 text-gray-900 dark:text-white">Sales Forecast (Next 6 weeks)</div>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 6" stroke="#cbd5e1" />
            <XAxis dataKey="date" tick={{ fill: "#64748b" }} />
            <YAxis tick={{ fill: "#64748b" }} />
            <Tooltip
              contentStyle={{ background: "#fff", borderRadius: 8, borderColor: "#cbd5e1" }}
              labelStyle={{ color: "#334155" }}
              itemStyle={{ color: "#334155" }}
            />
            {/* Confidence band */}
            <Area type="monotone" dataKey="upper" stroke={null} fill="#3b82f6" fillOpacity={0.08} />
            <Area type="monotone" dataKey="lower" stroke={null} fill="#3b82f6" fillOpacity={0.08} />
            {/* Actuals */}
            <Line type="monotone" dataKey="actual" stroke="#facc15" strokeWidth={2} dot={{ r: 3 }} name="Actual" />
            {/* Forecast */}
            <Line type="monotone" dataKey="forecast" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} name="Forecast" />
            {/* Event marker */}
            {chartData.map((d, i) =>
              d.event ? (
                <ReferenceDot
                  key={i}
                  x={d.date}
                  y={d.forecast}
                  r={6}
                  fill="#f43f5e"
                  stroke="none"
                  label={{ value: "Event", position: "top", fill: "#f43f5e", fontSize: 12 }}
                />
              ) : null
            )}
          </LineChart>
        </ResponsiveContainer>
        <div className="text-xs text-gray-400 mt-1">Shaded area: Confidence interval. Dots: Events/promos.</div>
      </div>

      {/* Insights */}
      <div className="flex flex-wrap gap-3 mb-4">
        {insights.map((ins, i) => (
          <div
            key={i}
            className={`
              px-4 py-2 rounded-lg font-medium text-sm
              ${ins.type === "info" ? "bg-blue-100 text-blue-800" : ""}
              ${ins.type === "warning" ? "bg-yellow-100 text-yellow-800" : ""}
              ${ins.type === "alert" ? "bg-red-100 text-red-700" : ""}
              dark:${ins.type === "info" ? "bg-blue-900 text-blue-100" : ""}
              dark:${ins.type === "warning" ? "bg-yellow-900 text-yellow-100" : ""}
              dark:${ins.type === "alert" ? "bg-red-900 text-red-100" : ""}
            `}
          >
            {ins.message}
          </div>
        ))}
      </div>

      {/* Forecast Table */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow border border-gray-200 dark:border-gray-800 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">Product</th>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">Forecast</th>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">Actual</th>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">Accuracy</th>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">Reorder Date</th>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">Anomaly</th>
            </tr>
          </thead>
          <tbody>
            {forecastTable.map((item, idx) => (
              <tr key={item.product} className="border-t border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4 text-gray-900 dark:text-white">{item.product}</td>
                <td className="py-2 px-4 text-gray-900 dark:text-white">{item.forecast}</td>
                <td className="py-2 px-4 text-gray-900 dark:text-white">{item.actual ?? "-"}</td>
                <td className="py-2 px-4 text-gray-900 dark:text-white">{item.accuracy}</td>
                <td className="py-2 px-4 text-gray-900 dark:text-white">{item.reorder}</td>
                <td className="py-2 px-4 font-semibold">
                  {item.anomaly
                    ? <span className="text-red-600 dark:text-red-400">Yes</span>
                    : <span className="text-green-600 dark:text-green-400">No</span>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
