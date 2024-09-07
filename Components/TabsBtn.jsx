"use client"
import React from 'react';
import { useTabs } from './TabsProvider';
import { motion } from 'framer-motion';

export const TabsBtn = ({ value, children, setMenu }) => {
  const { activeTab, setActiveTab } = useTabs();
  
  const isActive = activeTab === value;

  return (
    <div
      onMouseEnter={
        () => {
          setActiveTab(value)
          setMenu(value)
        }

      } // Hover functionality
      className="relative inline-block"
    >
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 rounded-md bg-blue-500"
          transition={{
            type: 'spring',
            bounce: 0.2,
            duration: 0.3,
          }}
        />
      )}
      <button
        onClick={() => setActiveTab(value)} // Click functionality
        className={`px-4 py-2 relative z-10 transition-colors duration-300 ${
          isActive ? 'text-white' : 'text-black dark:text-white hover:text-blue-500'
        }`}
      >
        {children}
      </button>
    </div>
  );
};
