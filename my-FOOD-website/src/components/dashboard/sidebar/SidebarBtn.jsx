// src/SidebarButton.js
import React from 'react';

const SidebarBtn = ({ icon, text, onClick, isActive }) => {
  return (
    <button 
      className={`w-full text-slate-500 bg-slate-50 text-lg rounded-md shadow-lg my-2 drop-shadow-lg  text-left px-4 py-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-500 transition duration-200 ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <i className={`fa-solid ${icon}`}></i>
      {text}
    </button>
  );
};

export default SidebarBtn;