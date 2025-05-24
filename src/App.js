import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Forecasts from "./pages/Forecasts";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab] = useState("Dashboard");

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
    case "Settings":
      Page = <Settings />;
      break;
    default:
      Page = <Dashboard />;
  }

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-50">
      <Sidebar tab={tab} setTab={setTab} />
      <main className="flex-1 p-8">{Page}</main>
    </div>
  );
}
