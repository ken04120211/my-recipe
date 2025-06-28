// src/recipeData.ts
import { Recipe } from './Recipe';

export const recipes: Recipe[] = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    imageUrl: 'https://via.placeholder.com/200',
    description: 'Classic Italian pasta dish with eggs, cheese, and bacon.',
    ingredients: ['Spaghetti', 'Eggs', 'Pecorino Romano cheese', 'Guanciale', 'Black pepper'],
    tags: ['Italian', 'Pasta', 'Dinner'],
  },
  {
    id: 2,
    name: 'Chicken Stir-Fry',
    imageUrl: 'https://via.placeholder.com/200',
    description: 'Quick and easy chicken stir-fry with vegetables.',
    ingredients: ['Chicken breast', 'Broccoli', 'Carrots', 'Soy sauce', 'Ginger', 'Garlic'],
    tags: ['Asian', 'Chicken', 'Dinner', 'Lunch'],
  },
  {
    id: 3,
    name: 'Avocado Toast',
    imageUrl: 'https://via.placeholder.com/200',
    description: 'Simple and healthy avocado toast.',
    ingredients: ['Bread', 'Avocado', 'Salt', 'Pepper', 'Red pepper flakes'],
    tags: ['Breakfast', 'Vegetarian', 'Healthy'],
  },
  {
    id: 4,
    name: 'Omelette',
    imageUrl: 'https://via.placeholder.com/200',
    description: 'Fluffy omelette with cheese and vegetables.',
    ingredients: ['Eggs', 'Cheese', 'Vegetables'],
    tags: ['Breakfast'],
  },
  {
    id: 5,
    name: 'Salad',
    imageUrl: 'https://via.placeholder.com/200',
    description: 'Fresh and healthy salad.',
    ingredients: ['Lettuce', 'Tomato', 'Cucumber', 'Carrot'],
    tags: ['Lunch', 'Healthy'],
  },
  {
    id: 6,
    name: 'Steak',
    imageUrl: 'https://via.placeholder.com/200',
    description: 'Juicy steak with potatoes and vegetables.',
    ingredients: ['Steak', 'Potatoes', 'Vegetables'],
    tags: ['Dinner'],
  },
];