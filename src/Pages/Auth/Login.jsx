import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      navigate("/user");
    } else {
      alert("User not found! Please register.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <h1 className="text-3xl font-bold text-white mb-6">Library Management System</h1>

      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        <h2 className="text-xl mb-4 text-center font-semibold">Login</h2>

        <input
          placeholder="Email"
          className="border p-2 w-full mb-2 rounded"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-2 rounded"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white w-full p-2 rounded mt-2"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-sm mt-3 text-center">
          New user? <Link to="/register" className="text-blue-600">Register</Link>
        </p>
      </div>
    </div>
  );
}

