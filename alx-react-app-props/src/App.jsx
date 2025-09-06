// src/App.jsx
import React from 'react';
import UserContext from './UserContext';
import UserProfile from './UserProfile';

function App() {
  const userData = {
    name: "Jane Doe",
    age: 25,
    bio: "Loves hiking and photography"
  };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
