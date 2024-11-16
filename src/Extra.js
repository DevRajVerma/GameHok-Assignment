import React from 'react';
import { Trophy, Wallet, LifeBuoy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Sidebar Component
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

// Header Component
const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
      <h1 className="text-xl font-medium">Tournament</h1>
      <div className="flex items-center space-x-2">
        <img
          src="/api/placeholder/32/32"
          alt="User avatar"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm font-medium">Roushan kumar</span>
      </div>
    </div>
  );
};

// Empty State Component
const EmptyState = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="text-center">
        <img 
          src="/api/placeholder/800/400"
          alt="Tournament empty state" 
          className="mx-auto mb-8 w-96"
        />
        <h2 className="text-xl font-medium text-gray-900 mb-4">
          Get Started by Creating Your First Tournament
        </h2>
        <button 
          onClick={() => navigate('/create-tournament')}
          className="bg-green-500 text-white px-6 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition-colors mx-auto"
        >
          <span>+</span>
          <span>Create Tournament</span>
        </button>
      </div>
    </div>
  );
};

// Main Layout Component
const HomePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <EmptyState />
      </div>
    </div>
  );
};

export default HomePage;