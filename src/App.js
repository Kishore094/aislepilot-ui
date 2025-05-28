import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Forecasts from "./pages/Forecasts";
import AdvancedForecasts from "./pages/AdvancedForecasts";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Promotions from "./pages/Promotions"; // ✅ NEWLY WIRED

function getStoredTheme() {
  return localStorage.getItem("aislepilot-theme") || "light";
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab] = useState("Dashboard");
  const [theme, setTheme] = useState(getStoredTheme());

  useEffect(() => {
    localStorage.setItem("aislepilot-theme", theme);
    document.documentElement.className = theme === "dark" ? "dark" : "";
  }, [theme]);

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  let Page;
  switch (tab) {
    case "Dashboard":
      Page = <Dashboard />;
      break;
    case "Inventory":
      Page = <Inventory />;
      break;
    case "Forecasts":
      Page = <Forecasts />;
      break;
    case "Advanced Forecasts":
      Page = <AdvancedForecasts />;
      break;
    case "Promotions":
      Page = <Promotions />; // ✅ INSERTED YOUR PROMOTIONS COMPONENT
      break;
    case "Product Performance":
      Page = <div className="p-10">Product Performance Page Coming Soon</div>;
      break;
    case "Alerts / Notifications":
      Page = <div className="p-10">Alerts / Notifications Page Coming Soon</div>;
      break;
    case "Pricing Intelligence":
      Page = <div className="p-10">Pricing Intelligence Page Coming Soon</div>;
      break;
    case "Loss & Waste Tracking":
      Page = <div className="p-10">Loss & Waste Tracking Page Coming Soon</div>;
      break;
    case "Finance / Accounting":
      Page = <div className="p-10">Finance / Accounting Page Coming Soon</div>;
      break;
    case "Reports":
      Page = <div className="p-10">Reports Page Coming Soon</div>;
      break;
    case "Settings":
      Page = <Settings />;
      break;
    default:
      Page = <Dashboard />;
  }

  return (
    <div
      className={
        theme === "dark"
          ? "bg-gray-950 text-gray-50 flex min-h-screen"
          : "bg-gray-50 text-gray-900 flex min-h-screen"
      }
    >
      <Sidebar tab={tab} setTab={setTab} theme={theme} setTheme={setTheme} />
      <main className="flex-1 p-8">{Page}</main>
    </div>
  );
}
