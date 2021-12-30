import { getRecipes } from './recipes.js'

// SYNCHRONOUS -- frontend
export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user // payload: user 

  }
} // expect this action creator to recieve a user object as an argument which will then take the place of the second argument in this returning action 

// ASYNCHRONOUS -- backend
export const getCurrentUser = () => {
  return dispatch => {
    fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
      method: "GET", // sending data of a new user
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    .then(resp => resp.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user.data))
        dispatch(getRecipes())
      }
    })
    .catch(console.log)
  }
}
// thunk allows us to return an action creator "dispatch" which is a function