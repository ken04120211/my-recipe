// src/Recipe.ts
export interface Recipe {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  ingredients: string[];
  tags: string[];
}