import { useState } from "react";
import { adminLogin } from "../api/api";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await adminLogin(email, password);
      if (res.token) {
        localStorage.setItem("token", res.token);
        toast.success("Login successful");
        navigate("/admin/dashboard");
      } else {
        toast.error(res.message || "Login failed");
      }
    } catch (err) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="w-full p-2 border rounded" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required className="w-full p-2 border rounded" />
        <button type="submit" className="w-full p-2 bg-green-600 text-white rounded">Login</button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
