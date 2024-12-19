// src/SidebarButton.js
import React from 'react';

const SidebarBtn = ({ icon, text, onClick, isActive }) => {
  return (
    <button 
      className={`w-full text-lg rounded shadow-lg my-1 border-gray-300  text-left px-4 py-3 hover:bg-slate-400 focus:outline-none focus:bg-gray-700 transition duration-200 ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <i className={`fa-solid ${icon}`}></i>
      {text}
    </button>
  );
};

export default SidebarBtn;
