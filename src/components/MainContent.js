// MainContent.js
import React from 'react';

const MainContent = () => {
  return (
    <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
      <img
        src="https://via.placeholder.com/400x200" // Replace with actual illustration URL
        alt="Tournament Illustration"
        style={{ marginBottom: '20px' }}
      />
      <h3>Get Started by Creating Your First Tournament</h3>
      <button 
        style={{
          background: '#27AE60',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px',
        }}
      >
        + Create Tournament
      </button>
    </div>
  );
};

export default MainContent;
