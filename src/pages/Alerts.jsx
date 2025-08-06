import React from "react";

const alerts = [
  {
    id: 1,
    type: "Low Stock",
    message: "Walkers Crisps stock is below threshold.",
    time: "10 mins ago",
  },
  {
    id: 2,
    type: "New Promotion",
    message: "Ben & Jerry’s offer: Buy 1 Get 1 Free",
    time: "Today",
  },
  {
    id: 3,
    type: "Stock Updated",
    message: "Coca-Cola inventory updated via EPOS import.",
    time: "Yesterday",
  },
];

export default function Alerts() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Alerts & Notifications</h1>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex justify-between items-start bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div>
              <div className="font-semibold text-gray-900">{alert.type}</div>
              <div className="text-gray-600">{alert.message}</div>
            </div>
            <div className="text-sm text-gray-400 whitespace-nowrap">{alert.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
