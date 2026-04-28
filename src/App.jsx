import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Auth/Login";
import { Register } from "./Pages/Auth/Register";
// import { AdminDashboard } from "./pages/AdminDashboard";
import { Dashboard } from "./Pages/User/Dashboard";
import { SearchBooks } from "./Pages/User/SearchBooks";
import { IssuedBooks } from "./Pages/User/IssuedBooks";
import { Fine } from "./Pages/User/Fine";
import { ReturnBook } from "./Pages/User/ReturnBooks";
import { AdminDashboard } from "./pages/Admin/Dashboard";

export default function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<Dashboard />} />
        <Route path="/user/search" element={<SearchBooks />} />
        <Route path="/user/issued" element={<IssuedBooks />} />
        <Route path="/user/fine" element={<Fine />} />
        <Route path="/user/return" element={<ReturnBook />} />
      </Routes>
  );
}