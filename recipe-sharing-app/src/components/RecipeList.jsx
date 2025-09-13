import React from 'react';
import { Link } from 'react-router-dom';  // ✅ import Link
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore();

  if (filteredRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <ul>
      {filteredRecipes.map((recipe) => (
        <li key={recipe.id}>
          {/* ✅ Use Link instead of plain text */}
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
