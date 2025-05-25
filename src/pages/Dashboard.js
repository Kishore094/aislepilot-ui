import React from "react";

const cards = [
  {
    title: "Weather Impact",
    value: "+4%",
    desc: "Rainy weather is expected to increase demand compared to a sunny day"
  },
  {
    title: "Seasonal Trends",
    value: "-12%",
    desc: "Sales are typically lower in summer than in winter"
  },
  {
    title: "Predicted Demand",
    value: "+18%",
    desc: "Demand for soft drinks is expected to rise by 18%"
  }
];

const suggested = [
  { product: "Ice Cream Tubs", reason: "27°C forecast this week", qty: "+30 units" },
  { product: "BBQ Chicken Wings", reason: "Bank Holiday + Sun", qty: "+10 units" },
  { product: "Water Bottles", reason: "Rainy Days Expected", qty: "+15 units" }
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-3">Advanced Forecasts</h1>
      <div className="flex gap-3 mb-6">
        {["Weather Impact", "Seasonal Trends", "Holiday Stocking"].map(tab => (
          <button
            key={tab}
            className="px-4 py-2 rounded-lg font-semibold mr-2
              bg-blue-100 text-blue-800 dark:bg-gray-800 dark:text-blue-300
              hover:bg-blue-200 dark:hover:bg-gray-700 transition"
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {cards.map(card => (
          <div key={card.title} className="rounded-xl bg-white dark:bg-gray-900 shadow p-6 border border-gray-200 dark:border-gray-800">
            <div className="text-sm font-semibold mb-1 text-gray-500 dark:text-gray-400">{card.title}</div>
            <div className="text-3xl font-bold mb-1 text-gray-900 dark:text-white">{card.value}</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">{card.desc}</div>
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-8 mb-6 border border-gray-200 dark:border-gray-800">
        <div className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Weather-Based Forecast</div>
        {/* Chart Placeholder */}
        <div className="h-44 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded mb-3">
          <span className="text-gray-400 dark:text-gray-500">[Line chart placeholder: Rainy vs Sunny]</span>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-8 border border-gray-200 dark:border-gray-800">
        <div className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Suggested Stocking Plan</div>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="py-2 pr-4 font-semibold">Product</th>
              <th className="py-2 pr-4 font-semibold">Reason</th>
              <th className="py-2 pr-4 font-semibold">Suggested Qty</th>
            </tr>
          </thead>
          <tbody>
            {suggested.map(item => (
              <tr key={item.product} className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 pr-4">{item.product}</td>
                <td className="py-2 pr-4">{item.reason}</td>
                <td className="py-2 pr-4">{item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
