import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell,
} from "recharts";

const salesTrendData = [
  { month: "Mar", sales: 200 },
  { month: "Apr", sales: 240 },
  { month: "May", sales: 230 },
  { month: "Jun", sales: 310 },
  { month: "Jul", sales: 390 },
];

const topRatedProducts = [
  { name: "Ben & Jerry’s", rating: 5 },
  { name: "Red Bull", rating: 5 },
  { name: "Coca Cola", rating: 4.5 },
  { name: "Walkers", rating: 4.5 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

const performanceData = [
  { product: "Coca Cola 500ml", category: "Drinks", sales: 210, rating: 4.4, margin: 3.5, turnover: 3.5, status: "In Stock" },
  { product: "Walkers Cheese & Onion", category: "Snacks", sales: 615, rating: 5.0, margin: 4.5, turnover: 4.5, status: "Low Stock" },
  { product: "Ben & Jerry’s Chocolate", category: "Frozen", sales: 620, rating: 5.0, margin: 4.0, turnover: 4.5, status: "In Stock" },
  { product: "Red Bull 250ml", category: "Drinks", sales: 350, rating: 5.3, margin: 4.2, turnover: 4.7, status: "In Stock" },
  { product: "Tropicana Orange Juice", category: "Tropical", sales: 350, rating: 4.5, margin: 3.9, turnover: 4.7, status: "In Stock" },
  { product: "Haagen Dazs Vanilla", category: "Vanilla", sales: 330, rating: 4.3, margin: 4.1, turnover: 4.6, status: "In Stock" },
  { product: "Pepsi 500ml", category: "Pepsi", sales: 325, rating: 5.3, margin: 4.7, turnover: 5.0, status: "In Stock" },
  { product: "Cadbury Dairy Milk", category: "Cadbury", sales: 250, rating: 4.8, margin: 3.8, turnover: 4.2, status: "In Stock" },
  { product: "Monster Energy", category: "Monster", sales: 345, rating: 5.0, margin: 4.4, turnover: 4.8, status: "Low Stock" },
  { product: "Nestle Pure Life", category: "Nestle", sales: 245, rating: 4.8, margin: 3.5, turnover: 4.8, status: "Low Stock" },
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Daily Sales</p>
          <p className="text-2xl font-semibold">210</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Rating</p>
          <p className="text-2xl font-semibold">4.2</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <p className="text-sm text-gray-500 dark:text-gray-400">Profit Margin</p>
          <p className="text-2xl font-semibold">34.5%</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <p className="text-sm text-gray-500 dark:text-gray-400">Stock Turnover</p>
          <p className="text-2xl font-semibold">6.7</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <h2 className="font-semibold mb-2">Sales Trend</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={salesTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <h2 className="font-semibold mb-2 text-red-600 dark:text-red-400">Low Performing Products</h2>
          <p className="text-sm">3 products with low sales and ratings</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
        <h2 className="font-semibold mb-2">Top Rated Products</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart layout="vertical" data={topRatedProducts}>
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="rating" fill="#3b82f6">
              {topRatedProducts.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow overflow-x-auto">
        <h2 className="font-semibold mb-4">Product Performance</h2>
        <table className="min-w-full text-sm">
          <thead className="text-xs text-gray-500 dark:text-gray-400 uppercase">
            <tr>
              <th className="p-2 text-left">Product</th>
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">Sales</th>
              <th className="p-2 text-left">Rating</th>
              <th className="p-2 text-left">Profit Margin</th>
              <th className="p-2 text-left">Stock Turnover</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {performanceData.map((item, index) => (
              <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-2">{item.product}</td>
                <td className="p-2">{item.category}</td>
                <td className="p-2">{item.sales}</td>
                <td className="p-2">{item.rating}★</td>
                <td className="p-2">{item.margin} %</td>
                <td className="p-2">{item.turnover} %</td>
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
