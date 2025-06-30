import React from "react";

const performanceData = [
  {
    product: "Coca Cola 500ml",
    category: "Drinks",
    sales: 210,
    rating: 4.4,
    margin: 3.5,
    turnover: 3.5,
    status: "In Stock",
    daily: 30,
    restockDays: 7,
    returns: 2.1,
    frequency: 3
  },
  {
    product: "Walkers Cheese & Onion",
    category: "Snacks",
    sales: 615,
    rating: 5.0,
    margin: 4.5,
    turnover: 4.5,
    status: "Low Stock",
    daily: 70,
    restockDays: 3,
    returns: 1.2,
    frequency: 6
  },
  {
    product: "Ben & Jerry’s Chocolate",
    category: "Frozen",
    sales: 620,
    rating: 5.0,
    margin: 4.0,
    turnover: 4.5,
    status: "In Stock",
    daily: 65,
    restockDays: 5,
    returns: 0.9,
    frequency: 5
  },
  {
    product: "Monster Energy",
    category: "Drinks",
    sales: 345,
    rating: 5.0,
    margin: 4.4,
    turnover: 4.8,
    status: "Low Stock",
    daily: 45,
    restockDays: 6,
    returns: 1.5,
    frequency: 4
  },
  {
    product: "Pepsi 500ml",
    category: "Pepsi",
    sales: 325,
    rating: 5.3,
    margin: 4.7,
    turnover: 5.0,
    status: "In Stock",
    daily: 40,
    restockDays: 8,
    returns: 2.8,
    frequency: 2
  }
];

export default function ProductPerformance() {
  return (
    <div className="space-y-6 p-6 text-gray-900 dark:text-white overflow-y-auto max-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Product Performance</h1>
        <button className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
          Filter by category
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <p className="text-sm text-gray-500 dark:text-gray-400">Top-Selling Product</p>
          <p className="text-lg font-semibold">Ben & Jerry’s</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <p className="text-sm text-gray-500 dark:text-gray-400">Low Rating Product Count</p>
          <p className="text-lg font-semibold">2</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <p className="text-sm text-gray-500 dark:text-gray-400">Most Overstocked</p>
          <p className="text-lg font-semibold">Pepsi 500ml</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <p className="text-sm text-gray-500 dark:text-gray-400">Avg Days Since Restock</p>
          <p className="text-lg font-semibold">5.4</p>
        </div>
      </div>

      {/* Insight Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded shadow">
          <h3 className="font-semibold text-lg">📉 Most Declined</h3>
          <p className="text-sm mt-1">Monster Energy saw a 22% drop in sales vs. last month</p>
        </div>
        <div className="bg-red-100 dark:bg-red-800 p-4 rounded shadow">
          <h3 className="font-semibold text-lg">🛑 Most Returned</h3>
          <p className="text-sm mt-1">Pepsi 500ml has 2.8% return rate</p>
        </div>
        <div className="bg-green-100 dark:bg-green-800 p-4 rounded shadow">
          <h3 className="font-semibold text-lg">🥇 Top Performer</h3>
          <p className="text-sm mt-1">Ben & Jerry’s has top sales, rating and low returns</p>
        </div>
      </div>

      {/* Detailed Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow overflow-x-auto">
        <h2 className="font-semibold mb-4">Detailed Product Metrics</h2>
        <table className="min-w-full text-sm">
          <thead className="text-xs text-gray-500 dark:text-gray-400 uppercase">
            <tr>
              <th className="p-2 text-left">Product</th>
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">Sales</th>
              <th className="p-2 text-left">Rating</th>
              <th className="p-2 text-left">Margin %</th>
              <th className="p-2 text-left">Turnover</th>
              <th className="p-2 text-left">Daily</th>
              <th className="p-2 text-left">Restock Days</th>
              <th className="p-2 text-left">Return %</th>
              <th className="p-2 text-left">Freq/mo</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {performanceData.map((item, index) => (
              <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2">{item.product}</td>
                <td className="p-2">{item.category}</td>
                <td className="p-2">{item.sales}</td>
                <td className="p-2">{item.rating}</td>
                <td className="p-2">{item.margin}</td>
                <td className="p-2">{item.turnover}</td>
                <td className="p-2">{item.daily}</td>
                <td className="p-2">{item.restockDays}</td>
                <td className="p-2">{item.returns}</td>
                <td className="p-2">{item.frequency}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    item.status === "In Stock"
                      ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-white"
                      : "bg-orange-100 text-orange-800 dark:bg-orange-700 dark:text-white"
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
