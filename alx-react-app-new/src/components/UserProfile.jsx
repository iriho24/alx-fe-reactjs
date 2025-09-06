// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '15px auto', borderRadius: '8px', maxWidth: '300px', backgroundColor: '#fafafa', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: '#555' }}>{props.age}</span></p>
      <p style={{ fontStyle: 'italic', color: '#666' }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
