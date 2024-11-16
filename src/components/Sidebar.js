// // Sidebar.js
// import React from 'react';

// const Sidebar = () => {
//   return (
//     <div style={{ width: '200px', background: '#f4f4f4', height: '100vh', padding: '20px' }}>
//       <h2 style={{ color: '#27AE60' }}>GAMEHOK</h2>
//       <nav>
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           <li style={{ marginBottom: '20px' }}>
//             <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Tournament</a>
//           </li>
//           <li style={{ marginBottom: '20px' }}>
//             <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Payments</a>
//           </li>
//           <li>
//             <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Support</a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

// Sidebar Component
import React from 'react';
import { Trophy, Wallet, LifeBuoy } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">
          <span className="text-green-600">G</span>AMEHOK
        </h1>
      </div>
      
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-green-600 bg-green-50 rounded-lg">
              <Trophy className="w-5 h-5 mr-3" />
              <span className="font-medium">Tournament</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Wallet className="w-5 h-5 mr-3" />
              <span>Payments</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <LifeBuoy className="w-5 h-5 mr-3" />
              <span>Support</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;