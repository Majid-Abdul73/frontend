import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div
      className="relative flex flex-col min-h-screen bg-[#121a21] dark group/design-root overflow-x-hidden"
      style={{
        fontFamily: 'Inter, "Noto Sans", sans-serif',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col flex-1 bg-black bg-opacity-50">
        <Header title="Pipeline Monitor" />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <motion.div
              className="flex flex-wrap justify-between gap-3 p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-white tracking-light text-[32px] font-bold leading-tight">Overview</p>
                <p className="text-[#95b0c6] text-sm font-normal leading-normal">Pipeline 1, 2, 3</p>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-4 p-4">
              <motion.div
                className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#364f63]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-white text-base font-medium leading-normal">Leak Detection</p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">2, 3, 0, 0</p>
              </motion.div>
              <motion.div
                className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#364f63]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-white text-base font-medium leading-normal">Robot Status</p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">3/5</p>
              </motion.div>
              <motion.div
                className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#364f63]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-white text-base font-medium leading-normal">Milestones</p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">0/5</p>
              </motion.div>
              <motion.div
                className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#364f63]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-white text-base font-medium leading-normal">Inspection Reports</p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">4/5</p>
              </motion.div>
            </div>

            {/* Add Images Here */}
            <div className="flex justify-center gap-6 my-6">
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*JQJUjfPCLWEn7xte.jpeg"
                  alt="Pipeline Monitor"
                  className="rounded-lg shadow-lg w-full sm:w-auto sm:max-w-xs"
                />
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZhoDVKQ5WEX2ajTL5DsGFq4M4XV2qm0agw&s"
                  alt="Pipeline Monitor"
                  className="rounded-lg shadow-lg w-full sm:w-auto sm:max-w-xs"
                />
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5y5OGEA4yUbgp_oI81n31hJS13ctF2_kWg&s"
                  alt="Pipeline Monitor"
                  className="rounded-lg shadow-lg w-full sm:w-auto sm:max-w-xs"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      

<footer className="bg-[#1a202c] py-2 text-white mt-auto w-full">
        <div className="container mx-auto flex justify-between items-center px-4">

          {/* Left Side */}
          <div className="flex flex-col items-center space-y-2 w-full max-w-xs text-center">
            <p className="text-2xl font-bold">Pipeline Monitor</p>
            <p className="text-lg">Innovating the Future of Pipeline Safety</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#2c90e2] hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#2c90e2] hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#2c90e2] hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center space-y-4 w-full max-w-xs text-center">
            <div className="flex space-x-4 text-base">
              <a href="/about" className="hover:text-[#2c90e2]">About Us</a>
              <a href="/contact" className="hover:text-[#2c90e2]">Contact</a>
              <a href="/privacy" className="hover:text-[#2c90e2]">Privacy Policy</a>
              <a href="/terms" className="hover:text-[#2c90e2]">Terms of Service</a>
            </div>
            <p className="text-base">&copy; 2024 Pipeline Monitor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
