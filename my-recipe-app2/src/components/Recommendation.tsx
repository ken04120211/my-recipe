// src/components/Recommendation.tsx
import React, { useState, useEffect } from 'react';
import { Recipe } from '../Recipe';
import { recipes } from '../recipeData';

const Recommendation: React.FC = () => {
  const [recommendedRecipe, setRecommendedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const getTimeOfDay = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 6 && currentHour < 12) {
        return 'Breakfast';
      } else if (currentHour >= 12 && currentHour < 18) {
        return 'Lunch';
      } else {
        return 'Dinner';
      }
    };

    const getRecommendedRecipe = () => {
      const timeOfDay = getTimeOfDay();
      const filteredRecipes = recipes.filter((recipe) => recipe.tags.includes(timeOfDay));
      if (filteredRecipes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
        setRecommendedRecipe(filteredRecipes[randomIndex]);
      } else {
        setRecommendedRecipe(recipes[Math.floor(Math.random() * recipes.length)]);
      }
    };

    getRecommendedRecipe();
  }, []);

  if (!recommendedRecipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{recommendedRecipe.name}</h3>
      <img src={recommendedRecipe.imageUrl} alt={recommendedRecipe.name} />
      <p>{recommendedRecipe.description}</p>
    </div>
  );
};

export default Recommendation;