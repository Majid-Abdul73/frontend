import React from 'react';
import { motion } from 'framer-motion';

const NotificationModal = ({ show, onClose, alertData }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <motion.div
        className="bg-white rounded-lg p-8 max-w-lg w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold mb-4">Gas Alert</h2>
        <ul className="mb-4">
          {alertData.map((alert, index) => (
            <li key={index} className="mb-2">
              <strong>{alert.type}</strong>: {alert.value} ppm
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default NotificationModal;
