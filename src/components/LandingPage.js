import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api/auth';

const LandingPage = () => {
  const [view, setView] = useState('home');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      setToken(response.data.token);
      alert('Login successful');
      navigate('/dashboard');
    } catch (error) {
      alert('Login failed');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/register`, { email, password });
      alert('Registration successful');
    } catch (error) {
      alert('Registration failed');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert('Password reset functionality is not implemented yet');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121a21] p-4">
      <div className="w-full max-w-4xl bg-black bg-opacity-50 p-6 rounded-lg shadow-md">
        {/* Hero Section */}
        {view === 'home' && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://www.optasense.com/wp-content/uploads/2022/10/refinery_shutterstock_320475338-1024x683.jpg"
              alt="Gas Pipeline Monitoring"
              className="w-full h-auto max-h-60 object-cover rounded-lg mb-6"
            />
            <h1 className="text-3xl font-bold mb-4 text-white">Welcome to Gas Pipeline Monitoring</h1>
            <p className="text-[#95b0c6] mb-6">
              Our advanced gas pipeline monitoring system ensures the safety and efficiency of gas pipelines by
              providing real-time data on gas levels and potential leaks. With state-of-the-art sensors and live
              video streaming, our system offers comprehensive monitoring and immediate alerts.
            </p>
            <button
              className="bg-[#3B82F6] text-white py-2 px-4 rounded-lg"
              onClick={() => handleViewChange('login')}
            >
              Get Started
            </button>
          </motion.div>
        )}

        {/* Login, Register, and Forgot Password Sections */}
        {(view === 'login' || view === 'register' || view === 'forget') && (
          <motion.div
            className="w-full max-w-md mx-auto mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {view === 'login' && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label className="block text-[#95b0c6]">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border rounded bg-[#1a202c] text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-[#95b0c6]">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border rounded bg-[#1a202c] text-white"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#3B82F6] text-white py-2 rounded"
                  >
                    Login
                  </button>
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="text-[#3B82F6]"
                      onClick={() => handleViewChange('forget')}
                    >
                      Forgot password?
                    </button>
                    <br />
                    <button
                      type="button"
                      className="text-[#3B82F6] mt-2"
                      onClick={() => handleViewChange('register')}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            )}

            {view === 'register' && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Register</h2>
                <form onSubmit={handleRegister}>
                  <div className="mb-4">
                    <label className="block text-[#95b0c6]">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border rounded bg-[#1a202c] text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-[#95b0c6]">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border rounded bg-[#1a202c] text-white"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#3B82F6] text-white py-2 rounded"
                  >
                    Register
                  </button>
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="text-[#3B82F6]"
                      onClick={() => handleViewChange('login')}
                    >
                      Already have an account? Login
                    </button>
                  </div>
                </form>
              </div>
            )}

            {view === 'forget' && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Forgot Password</h2>
                <form onSubmit={handleForgotPassword}>
                  <div className="mb-4">
                    <label className="block text-[#95b0c6]">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded bg-[#1a202c] text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#3B82F6] text-white py-2 rounded"
                  >
                    Reset Password
                  </button>
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="text-[#3B82F6]"
                      onClick={() => handleViewChange('login')}
                    >
                      Back to Login
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
