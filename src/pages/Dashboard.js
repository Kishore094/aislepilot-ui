import React from "react";
export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="bg-gray-900 rounded-2xl p-8 shadow border border-gray-800">
        <div className="text-lg">Welcome to your AislePilot Dashboard! 🚀</div>
        <div className="mt-4 text-gray-400">
          Here you’ll see sales insights, KPIs, and real-time analytics as you build out your platform.
        </div>
      </div>
    </div>
  );
}
