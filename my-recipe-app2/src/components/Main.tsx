// src/components/Main.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../Recipe';
import { recipes } from '../recipeData';
import './Main.css';

const Main: React.FC = () => {
  return (
    <main className="main-content">
      <section className="recommendation-section">
        <div className="section-header">
          <h2>Today's Recommendation</h2>
          <Link to="/recommendation">See More &gt;</Link>
        </div>
        <div className="recipe-card-container">
          {recipes.slice(0, 3).map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.imageUrl} alt={recipe.name} />
              <h3>{recipe.name}</h3>
              <p>{recipe.description.substring(0, 50)}...</p>
              <div className="tags">
                {recipe.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="recent-recipes-section">
        <div className="section-header">
          <h2>Recently Made Recipes</h2>
          <Link to="/history">See More &gt;</Link>
        </div>
        <div className="recipe-card-container">
          {recipes.slice(0, 4).map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.imageUrl} alt={recipe.name} />
              <h3>{recipe.name}</h3>
              <p>{recipe.description.substring(0, 50)}...</p>
              <div className="tags">
                {recipe.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;