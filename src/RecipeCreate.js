import React, { useState } from "react";

function RecipeCreate({submitNewRecipe}) {

  // Initial state and revert back to after handleSubmit
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialFormState})

  //handles changes made to form
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
    console.log(formData)
  }

  //submit button trigger
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("submitted:", formData)
    const newRecipe = {
      name: formData.name,
      cuisine: formData.cuisine,
      photo: formData.photo,
      ingredients: formData.ingredients,
      preparation: formData.preparation,
    }
    submitNewRecipe(newRecipe)
    setFormData({...initialFormState})
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required={true}
                onChange={handleChange}
                value={formData.name}
                />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                required={true}
                onChange={handleChange}
                value={formData.cuisine}
                />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="url"
                placeholder="URL"
                required={true}
                onChange={handleChange}
                value={formData.photo}
                />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                placeholder="Ingredients"
                required={true}
                onChange={handleChange}
                value={formData.ingredients}
                />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                type="text"
                placeholder="Preparation"
                required={true}
                onChange={handleChange}
                value={formData.preparation}
                />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
