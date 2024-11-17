// Header.js
import React from 'react';

// Header Component
const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
      <h1 className="text-xl font-medium">Tournament</h1>
      <div className="flex items-center space-x-2">
        <img
          src="https://theshreekrishna.com/wp-content/uploads/2024/05/krishna-images-dp.webp"
          alt="User avatar"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm font-medium">Roushan kumar</span>
      </div>
    </div>
  );
};

export default Header;
