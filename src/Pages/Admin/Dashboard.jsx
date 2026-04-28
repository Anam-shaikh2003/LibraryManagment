export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
      {/* Header */}
      <div className="flex justify-between items-center text-white mb-6">
        <h1 className="text-3xl font-bold">Library Management System</h1>
        <button className="bg-red-500 px-4 py-2 rounded">Log Out</button>
      </div>

      {/* Top Navigation */}
      <div className="bg-white rounded-2xl shadow p-4 mb-6 flex justify-around font-semibold">
        <span>Maintenance</span>
        <span>Reports</span>
        <span>Transactions</span>
      </div>

      {/* Product Details Table */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Product Details
        </h2>

        <table className="w-full border rounded overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Code No From</th>
              <th className="p-2">Code No To</th>
              <th className="p-2">Category</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-center">
              <td className="p-2">SC(B/M)000001</td>
              <td>SC(B/M)000000</td>
              <td className="font-semibold">Science</td>
            </tr>

            <tr className="text-center">
              <td className="p-2">EC(B/M)000001</td>
              <td>EC(B/M)000000</td>
              <td className="font-semibold">Economics</td>
            </tr>

            <tr className="text-center">
              <td className="p-2">FC(B/M)000001</td>
              <td>FC(B/M)000000</td>
              <td className="font-semibold">Fiction</td>
            </tr>

            <tr className="text-center">
              <td className="p-2">CH(B/M)000001</td>
              <td>CH(B/M)000000</td>
              <td className="font-semibold">Children</td>
            </tr>

            <tr className="text-center">
              <td className="p-2">PD(B/M)000001</td>
              <td>PD(B/M)000000</td>
              <td className="font-semibold">Personal Development</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}