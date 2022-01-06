// import Home from './components/Home.js'

function recipeReducer(state = [], action) {
  switch (action.type) {
    case "SET_RECIPES":
      return action.recipes

    case "CLEAR_RECIPES":
      return []

    case "CLEAR_RECIPE_FORM":
      return []

    default:
      return state
  }
}

export default recipeReducer