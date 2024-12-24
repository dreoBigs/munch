import { Recipe } from "../types/recipe";

export const recipes: Recipe[] = [
  {
    id: "1",
    name: "Grilled Lemon Herb Chicken",
    description: "A light and flavorful chicken dish perfect for summer grilling",
    ingredients: [
      { name: "Chicken breast", quantity: "4", unit: "pieces" },
      { name: "Lemon", quantity: "2", unit: "whole" },
      { name: "Olive oil", quantity: "3", unit: "tablespoons" },
      { name: "Fresh rosemary", quantity: "2", unit: "sprigs" },
      { name: "Garlic", quantity: "4", unit: "cloves" },
    ],
    instructions: [
      "Marinate chicken in lemon juice, olive oil, and herbs for 30 minutes",
      "Preheat grill to medium-high heat",
      "Grill chicken for 6-7 minutes per side",
      "Let rest for 5 minutes before serving",
    ],
    prepTime: 40,
    cookTime: 15,
    servings: 4,
    calories: 320,
    difficulty: "Easy",
    imageUrl: "/placeholder.svg",
    tags: ["chicken", "grilled", "healthy", "low-carb"],
  },
  {
    id: "2",
    name: "Mediterranean Quinoa Bowl",
    description: "A nutritious and colorful bowl packed with Mediterranean flavors",
    ingredients: [
      { name: "Quinoa", quantity: "1", unit: "cup" },
      { name: "Cherry tomatoes", quantity: "1", unit: "cup" },
      { name: "Cucumber", quantity: "1", unit: "medium" },
      { name: "Feta cheese", quantity: "1/2", unit: "cup" },
      { name: "Kalamata olives", quantity: "1/4", unit: "cup" },
    ],
    instructions: [
      "Cook quinoa according to package instructions",
      "Chop vegetables into bite-sized pieces",
      "Combine all ingredients in a bowl",
      "Drizzle with olive oil and season to taste",
    ],
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    calories: 380,
    difficulty: "Easy",
    imageUrl: "/placeholder.svg",
    tags: ["vegetarian", "healthy", "mediterranean"],
  },
];