// src/hooks/useAuth.js
export default function useAuth() {
  // Simulate authentication status
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  return { isAuthenticated };
}
