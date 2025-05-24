import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 900);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-2xl p-8 w-96 max-w-full shadow-lg border border-gray-200">
        <div className="mb-4 text-center text-2xl font-bold text-gray-900">
          AislePilot Login
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="px-4 py-3 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="text"
            placeholder="Username"
            required
          />
          <input
            className="px-4 py-3 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="password"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

