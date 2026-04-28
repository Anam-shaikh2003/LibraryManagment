import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const saveUsers = (users) => localStorage.setItem("users", JSON.stringify(users));

export function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(u => u.email === email);
    if (exists) {
      alert("Already registered! Please login.");
      navigate("/login");
      return;
    }

    // Default role = user
    const newUser = { name, email, password, role: "user" };
    saveUsers([...users, newUser]);

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-500 to-teal-600">
      <h1 className="text-3xl font-bold text-white mb-6">Library Management System</h1>

      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        <h2 className="text-xl mb-4 text-center font-semibold">Register</h2>

        <input
          placeholder="Name"
          className="border p-2 w-full mb-2 rounded"
          onChange={e => setName(e.target.value)}
        />

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
          className="bg-green-600 hover:bg-green-700 text-white w-full p-2 rounded mt-2"
          onClick={handleRegister}
        >
          Register
        </button>

        <p className="text-sm mt-3 text-center">
          Already user? <Link to="/login" className="text-green-600">Login</Link>
        </p>
      </div>
    </div>
  );
}

