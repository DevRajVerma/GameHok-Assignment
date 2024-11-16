// Header.js
import React from 'react';

// const Header = () => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#fff', boxShadow: '0 1px 5px rgba(0,0,0,0.1)' }}>
//       <h2>Tournament</h2>
//       <div>
//         <span>Roushan Kumar</span>
//         <img 
//           src="https://via.placeholder.com/40" 
//           alt="Profile" 
//           style={{ width: '40px', height: '40px', borderRadius: '50%', marginLeft: '10px' }} 
//         />
//       </div>
//     </div>
//   );
// };

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
