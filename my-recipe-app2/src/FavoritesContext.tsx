// src/FavoritesContext.tsx
import React, { createContext, useState, useContext } from 'react';
import { Recipe } from './Recipe';

interface FavoritesContextProps {
  favoriteRecipes: Recipe[];
  addFavorite: (recipe: Recipe) => void;
  removeFavorite: (recipe: Recipe) => void;
}

const FavoritesContext = createContext<FavoritesContextProps>({
  favoriteRecipes: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

  const addFavorite = (recipe: Recipe) => {
    setFavoriteRecipes([...favoriteRecipes, recipe]);
  };

  const removeFavorite = (recipe: Recipe) => {
    setFavoriteRecipes(favoriteRecipes.filter((favRecipe) => favRecipe.id !== recipe.id));
  };

  return (
    <FavoritesContext.Provider value={{ favoriteRecipes, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);