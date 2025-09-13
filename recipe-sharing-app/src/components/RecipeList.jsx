import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore();

  if (filteredRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <ul>
      {filteredRecipes.map((recipe, index) => (
        <li key={index}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
