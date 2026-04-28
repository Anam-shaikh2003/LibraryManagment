import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col items-center p-6">
      
      <h1 className="text-3xl font-bold text-white mb-6">
        Library Management System
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          User Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <Link to="/user/search">
            <div className="p-4 bg-blue-100 hover:bg-blue-200 rounded-xl text-center cursor-pointer transition">
              🔍 Search Books
            </div>
          </Link>

          <Link to="/user/issued">
            <div className="p-4 bg-green-100 hover:bg-green-200 rounded-xl text-center cursor-pointer transition">
              📚 Issued Books
            </div>
          </Link>

          <Link to="/user/return">
            <div className="p-4 bg-yellow-100 hover:bg-yellow-200 rounded-xl text-center cursor-pointer transition">
              📤 Return Book
            </div>
          </Link>

          <Link to="/user/fine">
            <div className="p-4 bg-red-100 hover:bg-red-200 rounded-xl text-center cursor-pointer transition">
              💰 Pay Fine
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}