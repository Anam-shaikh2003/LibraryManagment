export function Fine() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-white mb-6">
        Library Management System
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Pay Fine
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input placeholder="Enter Book Name" className="border p-2 rounded" />
          <input placeholder="Enter Author" className="border p-2 rounded" />

          <input placeholder="Serial No" className="border p-2 rounded" />
          <input type="date" className="border p-2 rounded" />

          <input type="date" className="border p-2 rounded" />
          <input type="date" className="border p-2 rounded" />

          <input placeholder="Fine Calculated (₹0)" className="border p-2 rounded" />

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label>Fine Paid</label>
          </div>

          <textarea
            placeholder="Remarks (Optional)"
            className="border p-2 rounded col-span-1 md:col-span-2"
          />
        </div>

        <div className="flex justify-between mt-6">
          <button className="bg-gray-400 text-white px-6 py-2 rounded-full">
            Cancel
          </button>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}