// SYNCH
export const setRecipes = recipes => {
  return {
    type: "SET_RECIPES",
    recipes
  }
}

export const clearRecipes = () => {
  return {
    type: "CLEAR_RECIPES"
  }
}

export const clearRecipeForm = () => {
  return {
    type: "CLEAR_RECIPE_FORM"
  }
}


// ASYNCH 

// get recipes
export const getRecipes = () => {
  return dispatch => {
    fetch("http://localhost:3001/api/v1/recipes", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    .then(resp => resp.json())
    .then(recipes => {
      if (recipes.error) {
        alert(recipes.error)
      } else {
        dispatch(setRecipes(recipes.data))
      }
    })
    .catch(console.log) 
  }
}


// postRecipes

// editRecipes

// deleteRecipes