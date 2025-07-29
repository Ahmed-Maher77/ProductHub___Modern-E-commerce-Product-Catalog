import React from 'react';

const TestComponent = () => {
  console.log("TestComponent rendering...");
  
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f0f0f0', 
      border: '2px solid red',
      margin: '20px',
      textAlign: 'center'
    }}>
      <h1>Test Component</h1>
      <p>If you can see this, React is working!</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default TestComponent; 