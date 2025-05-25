import React from "react";

const kpis = [
  { label: "Sales", value: "£18,530", change: "+5.2%" },
  { label: "Margin", value: "35.6%", change: "+1.1%" },
  { label: "Alerts", value: "4", change: null },
  { label: "Sales by", value: "Snack Bars", change: null }
];

const bestSellers = [
  { product: "Snack Bars", sales: "3,466", qty: "25" },
  { product: "Orange Juice", sales: "2,289", qty: "9" },
  { product: "Bagged Salad", sales: "2,390", qty: "3" },
  { product: "Granola Bars", sales: "1,250", qty: "4" }
];

const slowMovers = [
  { product: "Cooking Oil", qty: "256" },
  { product: "Instant Oatmeal", qty: "256" },
  { product: "Mustard", qty: "248" },
  { product: "Bottled Water", qty: "229" }
];

const salesByCategory = [
  { label: "Produce", value: 33, color: "bg-blue-500" },
  { label: "Dairy", value: 20, color: "bg-indigo-500" },
  { label: "Snacks", value: 31, color: "bg-orange-400" },
  { label: "Other", value: 17, color: "bg-gray-400" }
];

const alerts = [
  { type: "Low inventory", detail: "Orange Juice has low stock (25 units)", time: "2h ago", color: "text-red-500" },
  { type: "Replenishment", detail: "Reorder Granola Bars soon", time: "1d ago", color: "text-blue-500" },
  { type: "", detail: "Reorder Bagged Salad soon", time: "2d ago", color: "text-blue-500" }
];

export default function Dashboard() {
  return (
    <div className="p-2 md:p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">AislePilot</h1>
      {/* KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {kpis.map((kpi, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow flex flex-col justify-between"
          >
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {kpi.value}
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              {kpi.label}
            </div>
            {kpi.change && (
              <div className="text-green-600 dark:text-green-400 text-xs font-bold mt-1">
                {kpi.change}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Sales Trend */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow col-span-2">
          <div className="text-gray-900 dark:text-white font-semibold mb-3">
            Sales Trend
          </div>
          {/* Placeholder for line chart */}
          <div className="h-40 flex items-center justify-center">
            <span className="text-gray-400 dark:text-gray-500">
              [Line chart placeholder]
            </span>
          </div>
        </div>
        {/* Sales by Category */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow">
          <div className="text-gray-900 dark:text-white font-semibold mb-3">
            Sales by Category
          </div>
          {/* Pie chart placeholder */}
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-400 flex items-center justify-center text-xl text-white">
              [Pie]
            </div>
          </div>
          <ul className="text-sm">
            {salesByCategory.map((cat, idx) => (
              <li key={cat.label} className="flex items-center gap-2 mb-1">
                <span
                  className={`inline-block w-3 h-3 rounded-full ${cat.color}`}
                ></span>
                <span className="text-gray-900 dark:text-white">
                  {cat.label}
                </span>
                <span className="ml-auto text-gray-500 dark:text-gray-400">
                  {cat.value}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Lower Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Best Sellers */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow">
          <div className="text-gray-900 dark:text-white font-semibold mb-3">
            Best Sellers
          </div>
          <table className="w-full text-left text-gray-900 dark:text-white text-sm">
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales</th>
                <th>Qty.</th>
              </tr>
            </thead>
            <tbody>
              {bestSellers.map((item, idx) => (
                <tr key={item.product}>
                  <td>{item.product}</td>
                  <td>{item.sales}</td>
                  <td>{item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Slow Movers */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow">
          <div className="text-gray-900 dark:text-white font-semibold mb-3">
            Slow Movers
          </div>
          <table className="w-full text-left text-gray-900 dark:text-white text-sm">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {slowMovers.map((item) => (
                <tr key={item.product}>
                  <td>{item.product}</td>
                  <td>{item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Alerts */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow">
          <div className="text-gray-900 dark:text-white font-semibold mb-3">
            Alerts
          </div>
          <ul>
            {alerts.map((alert, idx) => (
              <li key={idx} className="mb-2">
                <span className={`font-semibold ${alert.color}`}>
                  {alert.type}{" "}
                </span>
                <span className="text-gray-900 dark:text-white">
                  {alert.detail}
                </span>
                <span className="block text-gray-500 dark:text-gray-400 text-xs ml-4">
                  {alert.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
