import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";

const promotionData = [
  { name: "Buy 1 Get Free", uplift: 18 },
  { name: "2 for £2", uplift: 25 },
  { name: "£1 Off", uplift: 12 },
  { name: "Expired", uplift: -1 },
];

const categoryData = [
  { name: "Drinks", value: 45 },
  { name: "Snacks", value: 30 },
  { name: "Frozen", value: 25 },
];

const COLORS = ["#3b82f6", "#10b981", "#facc15"];

const promotionsTable = [
  { product: "Coca Cola 1.5L", type: "2 for £2", start: "01 May", end: "15 May", status: "Active", performance: "+18%" },
  { product: "Red Bull 250ml", type: "Buy 1 Get 1 Free", start: "29 Apr", end: "12 May", status: "Expired", performance: "+12%" },
  { product: "Doritos", type: "£1 Off", start: "05 May", end: "25 May", status: "Active", performance: "-5%" },
  { product: "Ben & Jerry’s", type: "3 for 2", start: "20 Apr", end: "05 May", status: "Expired", performance: "-3%" },
  { product: "Walkers", type: "2 for £1.50", start: "08 May", end: "18 May", status: "Active", performance: "+10%" },
];

export default function Promotions() {
  return (
    <div className="p-6 space-y-6 text-gray-900 dark:text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Promotions</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Promotion</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <p className="text-sm text-gray-500 dark:text-gray-400">Total Active Promotions</p>
          <p className="text-2xl font-semibold">5</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <p className="text-sm text-gray-500 dark:text-gray-400">Top Performing Promotion</p>
          <p className="text-2xl font-semibold">Buy 1 Get 1 Free</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <h2 className="font-semibold mb-2">Promotion Performance</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={promotionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="uplift" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <h2 className="font-semibold mb-2">Category Impact</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={categoryData} dataKey="value" nameKey="name" outerRadius={80} label>
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
        <h2 className="font-semibold mb-4">Current Promotions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase text-gray-500 dark:text-gray-400">
              <tr>
                <th className="p-2">Product</th>
                <th className="p-2">Promotion Type</th>
                <th className="p-2">Start Date</th>
                <th className="p-2">End Date</th>
                <th className="p-2">Status</th>
                <th className="p-2">Performance</th>
              </tr>
            </thead>
            <tbody>
              {promotionsTable.map((item, index) => (
                <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-2">{item.product}</td>
                  <td className="p-2">{item.type}</td>
                  <td className="p-2">{item.start}</td>
                  <td className="p-2">{item.end}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Active"
                        ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-white"
                        : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-white"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-2">{item.performance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
