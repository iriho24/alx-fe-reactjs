import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required!');
      return;
    }

    setError('');
    console.log('Form submitted:', formData);

    // Mock API call
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log('Mock API response:', data))
      .catch((err) => console.error('Error:', err));
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>User Registration (Controlled)</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
