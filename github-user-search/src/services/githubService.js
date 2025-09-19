import axios from "axios";

// Basic user fetch by username
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Advanced search with multiple parameters: location, minimum repositories
export const fetchAdvancedUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = username ? `${username} in:login` : "";
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}&per_page=10&page=${page}`
  );
  return response.data.items; // GitHub Search API returns { items: [...] }
};
