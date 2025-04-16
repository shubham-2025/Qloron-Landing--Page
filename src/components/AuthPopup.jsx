import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.png"; // Import the logo image


const AuthPopup = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAuth = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields.");
      return;
    }
  
    if (isLogin) {
      // Login
      const matchedUser = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );
  
      if (matchedUser) {
        toast.success("Login successful!");
        setTimeout(() => {
          onClose();
          navigate("/morejobs");
        }, 1500); // Delay so toast is visible
      } else {
        toast.error("Invalid email or password.");
      }
    } else {
      // Signup
      const userExists = users.some((user) => user.email === formData.email);
  
      if (userExists) {
        toast.warning("Email already registered. Please log in.");
        return;
      }
  
      const updatedUsers = [...users, formData];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      toast.success("Account created! Please log in.");
      setIsLogin(true);
    }
  };
  

  return (
    <motion.div
    className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <motion.div
      className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 w-full max-w-md shadow-xl relative"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
    >
      <button
        aria-label="Close modal"
        className="absolute top-4 right-4"
        onClick={onClose}
      >
        <X className="text-gray-500" />
        
      </button>
      {/* Use the imported logo here */}
      <img
       src={logo}
       alt="Logo"
       className="w-40 h-20 mr-20"
      />

      <h2 className="text-4xl md:text-5xl font-bold text-[#49B2A9] mb-4 text-center">
        {isLogin ? "Login" : "Sign Up"}
        
      </h2>
      <div className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full border p-2 rounded-md"
          autoComplete="email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full border p-2 rounded-md"
          autoComplete={isLogin ? "current-password" : "new-password"}
        />
        <button
          onClick={handleAuth}
          className="w-full bg-[#49B2A9] text-white p-2 rounded-md hover:bg-[#3d9e8f]"
        >
          {isLogin ? "Login" : "Create Account"}
        </button>
        <p className="text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#49B2A9] font-semibold underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
       
      </motion.div>
    </motion.div>
  );
};

export default AuthPopup;
