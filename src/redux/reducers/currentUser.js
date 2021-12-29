function currentUserReducer(state = null, action) { // state null for truthiness check
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user

    case "CLEAR_CURRENT_USER":
      return null
      
    default:
      return state
  }
}

export default currentUserReducer