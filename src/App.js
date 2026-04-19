import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  //sent to RecipeCreate and updates array
  const submitNewRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe])
  }
  
  //delete button
  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((ignored, index) => index !== indexToDelete)
    )
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate submitNewRecipe={submitNewRecipe} />
    </div>
  );
}

export default App;
