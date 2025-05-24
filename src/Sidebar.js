import React from "react";
const tabs = [
  { label: "Dashboard", icon: "📊" },
  { label: "Inventory", icon: "📦" },
  { label: "Forecasts", icon: "🔮" },
  { label: "Settings", icon: "⚙️" }
];

export default function Sidebar({ tab, setTab }) {
  return (
    <aside className="w-56 bg-gray-900 border-r border-gray-800 flex flex-col">
      <div className="p-6 text-2xl font-bold tracking-wide">
        AislePilot
      </div>
      <nav className="flex-1 flex flex-col gap-1">
        {tabs.map(t => (
          <button
            key={t.label}
            className={`flex items-center gap-3 px-6 py-3 text-lg transition rounded-l-full
              ${tab === t.label ? "bg-gray-800 font-semibold" : "hover:bg-gray-800/60"}
            `}
            onClick={() => setTab(t.label)}
          >
            <span>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
