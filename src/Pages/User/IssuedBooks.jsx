export function IssuedBooks() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-white mb-6">
        Library Management System
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Issued Books
        </h2>

        <table className="w-full border rounded overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Author</th>
              <th className="p-2">Issue Date</th>
              <th className="p-2">Return Date</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-center">
              <td className="p-2">React Guide</td>
              <td>John</td>
              <td>10 Oct 2025</td>
              <td>17 Oct 2025</td>
              <td className="text-yellow-600">Pending</td>
            </tr>

            <tr className="text-center">
              <td className="p-2">Node.js Basics</td>
              <td>Mike</td>
              <td>01 Oct 2025</td>
              <td>08 Oct 2025</td>
              <td className="text-red-600">Overdue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}