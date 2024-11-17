import React, { useState } from 'react';
import { Trophy, Wallet, LifeBuoy } from 'lucide-react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('tournament');

  const menuItems = [
    { id: 'tournament', icon: Trophy, label: 'Tournament' },
    { id: 'payments', icon: Wallet, label: 'Payments' },
    { id: 'support', icon: LifeBuoy, label: 'Support' }
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-4">
      <div className="mb-8">
        <a 
          href="/" 
          className="text-xl font-bold hover:opacity-80 transition-opacity"
        >
          <span className="text-green-600">G</span>AMEHOK
        </a>
      </div>
      
      <nav>
        <ul className="space-y-2">
          {menuItems.map(({ id, icon: Icon, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  activeItem === id 
                    ? 'text-green-600 bg-green-50' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(id);
                }}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className={activeItem === id ? 'font-medium' : ''}>
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;