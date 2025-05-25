import React from "react";

// --- MOCK DATA ---
const kpis = [
  { label: "Total Value", value: "£42,900" },
  { label: "SKUs", value: "148" },
  { label: "Low Stock", value: "7" },
  { label: "Overstocked", value: "3" },
  { label: "Expiring Soon", value: "2" }
];

const alerts = [
  { type: "Low Stock", detail: "Bagged Salad (3 left)", color: "bg-red-100 text-red-700" },
  { type: "Overstock", detail: "Cereal Bars (225 units)", color: "bg-blue-100 text-blue-800" },
  { type: "Expiring Soon", detail: "Egg Mayonnaise (expires in 2 days)", color: "bg-yellow-100 text-yellow-800" }
];

const pieData = [
  { label: "Produce", percent: 34, color: "bg-blue-500" },
  { label: "Dairy", percent: 24, color: "bg-indigo-500" },
  { label: "Snacks", percent: 29, color: "bg-orange-400" },
  { label: "Other", percent: 13, color: "bg-gray-400" }
];

const expiring = [
  { product: "Egg Mayonnaise", days: 2 },
  { product: "Fresh Milk", days: 4 }
];

const restock = [
  { product: "Bagged Salad", current: 3, suggest: 20 },
  { product: "Orange Juice", current: 9, suggest: 30 }
];

const inventory = [
  { sku: "SB203", product: "Snack Bars", category: "Snacks", stock: 25, value: "£50", expiry: "2025-07-15", supplier: "Nisa", status: "OK" },
  { sku: "OJ001", product: "Orange Juice", category: "Drinks", stock: 9, value: "£18", expiry: "2025-06-15", supplier: "CocaCola", status: "Low" },
  { sku: "EGG12", product: "Egg Mayonnaise", category: "Deli", stock: 12, value: "£12", expiry: "2025-06-03", supplier: "Nisa", status: "Expiring" },
  { sku: "BS888", product: "Bagged Salad", category: "Produce", stock: 3, value: "£6", expiry: "2025-06-06", supplier: "Nisa", status: "Low" },
  { sku: "CB256", product: "Cereal Bars", category: "Snacks", stock: 225, value: "£450", expiry: "2026-01-31", supplier: "Nisa", status: "Overstock" }
];

// --- PAGE ---
export default function Inventory() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Inventory
      </h1>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {kpis.map((kpi, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow flex flex-col items-center"
          >
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {kpi.value}
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              {kpi.label}
            </div>
          </div>
        ))}
      </div>

      {/* Alerts */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {alerts.map((alert, i) => (
          <div
            key={i}
            className={`px-4 py-2 rounded-lg font-semibold text-sm flex items-center ${alert.color}`}
          >
            {alert.type}: {alert.detail}
          </div>
        ))}
      </div>

      {/* Pie Chart + Expiring/Restock Panels */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-800">
          <div className="font-semibold mb-3 text-gray-900 dark:text-white">Value by Category</div>
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-400 flex items-center justify-center text-xl text-white">
              [Pie]
            </div>
          </div>
          <ul className="text-sm">
            {pieData.map((cat, idx) => (
              <li key={cat.label} className="flex items-center gap-2 mb-1">
                <span className={`inline-block w-3 h-3 rounded-full ${cat.color}`}></span>
                <span className="text-gray-900 dark:text-white">{cat.label}</span>
                <span className="ml-auto text-gray-500 dark:text-gray-400">{cat.percent}%</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Expiring Soon */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-800">
          <div className="font-semibold mb-3 text-gray-900 dark:text-white">Expiring Soon</div>
          <ul className="text-sm">
            {expiring.length ? expiring.map(item => (
              <li key={item.product} className="mb-2 flex items-center">
                <span className="text-yellow-500 font-semibold mr-2">⏰</span>
                <span className="text-gray-900 dark:text-white">{item.product}</span>
                <span className="ml-auto text-yellow-600 dark:text-yellow-400">{item.days} days</span>
              </li>
            )) : <li className="text-gray-500 dark:text-gray-400">No expiring products</li>}
          </ul>
        </div>
        {/* Restock Suggestions */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-800">
          <div className="font-semibold mb-3 text-gray-900 dark:text-white">Restock Suggestions</div>
          <ul className="text-sm">
            {restock.length ? restock.map(item => (
              <li key={item.product} className="mb-2 flex items-center">
                <span className="text-blue-500 font-semibold mr-2">↗️</span>
                <span className="text-gray-900 dark:text-white">{item.product}</span>
                <span className="ml-auto text-gray-500 dark:text-gray-400">Now: {item.current} &nbsp;|&nbsp; Suggest: {item.suggest}</span>
              </li>
            )) : <li className="text-gray-500 dark:text-gray-400">No restock needed</li>}
          </ul>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow border border-gray-200 dark:border-gray-800 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">SKU</th>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">Product</th>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">Category</th>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">Stock</th>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">Value</th>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">Expiry</th>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">Supplier</th>
              <th className="py-2 px-4 text-gray-700 dark:text-gray-200 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, idx) => (
              <tr key={item.sku} className="border-t border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4 text-gray-900 dark:text-white">{item.sku}</td>
                <td className="py-2 px-4 text-gray-900 dark:text-white">{item.product}</td>
                <td className="py-2 px-4 text-gray-900 dark:text-white">{item.category}</td>
                <td className="py-2 px-4 text-gray-900 dark:text-white">{item.stock}</td>
                <td className="py-2 px-4 text-gray-900 dark:text-white">{item.value}</td>
                <td className="py-2 px-4 text-gray-900 dark:text-white">{item.expiry}</td>
                <td className="py-2 px-4 text-gray-900 dark:text-white">{item.supplier}</td>
                <td className={`py-2 px-4 font-semibold 
                  ${item.status === "Low" ? "text-red-600 dark:text-red-400" : ""}
                  ${item.status === "Overstock" ? "text-blue-600 dark:text-blue-400" : ""}
                  ${item.status === "Expiring" ? "text-yellow-600 dark:text-yellow-400" : ""}
                  ${item.status === "OK" ? "text-green-600 dark:text-green-400" : ""}
                `}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
