import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const { searchTerm, setSearchTerm, filterRecipes } = useRecipeStore();

  // Run filtering each time search term changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: '8px', margin: '10px 0', width: '100%' }}
    />
  );
};

export default SearchBar;
