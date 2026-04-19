import React from "react";
import RecipeBuilder from "./RecipeBuilder";

function RecipeList({recipes, deleteRecipe}) {
  
  //map recipes and send to RecipeBuilder to handle
  const allRecipes = recipes.map((recipe, index) => <RecipeBuilder recipe={recipe} index={index} key={index} deleteRecipe={deleteRecipe} />)
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {allRecipes}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
