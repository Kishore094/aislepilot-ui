import React from "react";

const tabs = [
  { label: "Dashboard", icon: "🏠" },
  { label: "Inventory", icon: "📦" },
  { label: "Forecasts", icon: "📈" },
  { label: "Advanced Forecasts", icon: "🔮" },
  { label: "Promotions", icon: "🎉" },
  { label: "Product Performance", icon: "⭐" },
  { label: "Alerts / Notifications", icon: "🔔" },
  { label: "Pricing Intelligence", icon: "💷" },
  { label: "Loss & Waste Tracking", icon: "🗑️" },
  { label: "Finance / Accounting", icon: "📊" },
  { label: "Reports", icon: "📑" },
  { label: "Settings", icon: "⚙️" }
];

export default function Sidebar({ tab, setTab, theme, setTheme }) {
  return (
    <aside className={`w-64 min-h-screen border-r flex flex-col
      bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800`}>
      <div className="flex items-center p-6 text-2xl font-bold gap-2 tracking-wide">
        <span role="img" aria-label="logo">🛒</span>
        AislePilot
      </div>
      <nav className="flex-1 flex flex-col gap-1">
        {tabs.map(t => (
          <button
            key={t.label}
            className={`
              flex items-center gap-3 px-6 py-3 text-base transition rounded-l-full
              ${tab === t.label
                ? "bg-blue-100 text-blue-900 dark:bg-gray-800 dark:text-blue-200 font-semibold"
                : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800"}
            `}
            onClick={() => setTab(t.label)}
          >
            <span>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </nav>
      <div className="p-4">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`w-full rounded-lg py-2 mt-4 font-semibold transition
            ${theme === "dark"
              ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"}
          `}
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </aside>
  );
}
