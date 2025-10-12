import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  setRecipes: (recipes) => set({ recipes }),
  
  // Add new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Search term management
  setSearchTerm: (term) => 
    set((state) => ({ searchTerm: term, filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    ) })),

  // Update and delete (from previous assignment)
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),
  
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== recipeId),
    })),

  // Favorites & Recommendations
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...new Set([...state.favorites, recipeId])] })),
  removeFavorite: (recipeId) =>
    set((state) => ({ favorites: state.favorites.filter((id) => id !== recipeId) })),
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
