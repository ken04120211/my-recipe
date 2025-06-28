// src/components/Favorites.tsx
import React from 'react';
import { useFavorites } from '../FavoritesContext';

const Favorites: React.FC = () => {
  const { favoriteRecipes } = useFavorites();

  return (
    <div>
      <h2>Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        <ul>
          {favoriteRecipes.map((recipe) => (
            <li key={recipe.id}>{recipe.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;