// src/App.jsx
import React from 'react';
import UserProfile from './UserProfile';
import UserContext from './UserContext';

function App() {
  const userData = {
    name: "Jane Doe",
    age: 28,
    bio: "Loves hiking and photography"
  };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
