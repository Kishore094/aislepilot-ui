import React from "react";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
          <div className="text-gray-500 text-xs mb-2">Total Sales</div>
          <div className="text-2xl font-bold text-gray-900">£12,540</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
          <div className="text-gray-500 text-xs mb-2">Gross Margin</div>
          <div className="text-2xl font-bold text-gray-900">24%</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
          <div className="text-gray-500 text-xs mb-2">Low Stock Items</div>
          <div className="text-2xl font-bold text-gray-900">12</div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-8 border border-gray-200">
        <div className="text-gray-700 mb-2 font-semibold">Quick Insights</div>
        <div className="text-gray-400">Charts and analytics coming soon!</div>
      </div>
    </div>
  );
}
