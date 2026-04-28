import { useState } from "react";

export function SearchBooks() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-white mb-6">
        Library Management System
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Search Books
        </h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by title or author..."
          className="border p-3 w-full rounded mb-4"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Results Table */}
        <table className="w-full border rounded overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Author</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="p-2">React Guide</td>
              <td>John</td>
              <td className="text-green-600">Available</td>
              <td>
                <button className="bg-blue-500 text-white px-3 py-1 rounded">Issue</button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="p-2">Node.js Basics</td>
              <td>Mike</td>
              <td className="text-red-600">Issued</td>
              <td>
                <button className="bg-gray-400 text-white px-3 py-1 rounded" disabled>
                  Not Available
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}