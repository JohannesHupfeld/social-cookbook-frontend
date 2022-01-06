 import { setRecipes } from './recipes'
//SYNCH
export const resetCreateRecipeForm = () => {
  return {
    type: "RESET_CREATE_RECIPE_FORM"
  }
}

export const updateCreateRecipeForm = (formData) => { // formData is name & value
  return {
    type: "UPDATE_CREATE_RECIPE_FORM",
    formData
  }
}



//ASYCH
export const createRecipe = (recipeData, history) => {
  return dispatch => {
    const sendableRecipeData = {
      name: recipeData.name,
      image_url: recipeData.image_url,
      ingredients: recipeData.ingredients,
      instructions: recipeData.instructions
    }
    fetch("http://localhost:3001/api/v1/recipes", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(sendableRecipeData)
    })
    .then(resp => resp.json())
    .then(recipe => {
      if (recipe.error) {
        alert(recipe.error)
      } else {
        dispatch(setRecipes(recipe.data.attributes))
        dispatch(resetCreateRecipeForm)
        dispatch(updateCreateRecipeForm)
        history.push('/recipes')
      }
    })
    .catch(console.log)
  }
}