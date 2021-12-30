export const setRecipes = recipes => {
  return {
    type: "SET_RECIPES",
    recipes
  }
}

export const getRecipes = () => {
  return dispatch => {
    fetch("http://localhost:3001/api/v1/recipes", {
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
  }
}
