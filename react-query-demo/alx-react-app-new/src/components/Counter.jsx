// src/components/Counter.jsx
import React, { useState } from 'react';

function Counter() {
  // Initialize state
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#f9f9f9' }}>
      <h2>Counter Application</h2>
      <p style={{ fontSize: '20px' }}>Current Count: {count}</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
        <button onClick={() => setCount(count + 1)} style={{ padding: '8px 12px' }}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ padding: '8px 12px' }}>Decrement</button>
        <button onClick={() => setCount(0)} style={{ padding: '8px 12px' }}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
