const initialState = {
  name: "",
  image_url: "",
  ingredients: "",
  instructions: "",
}

function recipeFormReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_CREATE_RECIPE_FORM":
      return action.formData

    case "RESET_CREATE_RECIPE_FORM":
      return initialState

    default:
      return state
  }
}

export default recipeFormReducer 