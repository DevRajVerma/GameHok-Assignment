import React from "react";

// Empty State Component
const EmptyState = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKM6cfl-BgNMu2j7fol4FdrIquqryBnjKt4vsxCx9U6BMtQxDM"
            alt="Tournament empty state" 
            className="mx-auto mb-8 w-96"
          />
          <h2 className="text-xl font-medium text-gray-900 mb-4">
            Get Started by Creating Your First Tournament
          </h2>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition-colors">
            <span>+</span>
            <span>Create Tournament</span>
          </button>
        </div>
      </div>
    );
  };

  export default EmptyState;