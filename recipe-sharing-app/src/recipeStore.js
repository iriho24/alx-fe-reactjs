import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // 👀 The test wants this function to exist by name
  setRecipes: (recipes) => set(() => ({ recipes })),

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate recommendations
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
