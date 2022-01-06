import { setCurrentUser } from './currentUser.js'
import { getRecipes } from './recipes.js'
import { clearRecipes } from './recipes.js'
import { clearRecipeForm } from './recipes.js'

// SYNCH
export const updateLoginForm = (formData) => { // without this you wouldnt see the username or password as you fill it in
  return {
    type: "UPDATE_LOGIN_FORM",
    formData
  }
}

export const clearCurrentUser = () => { // clears the user in the front end 
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

export const resetLoginForm = () => { // lives in login 
  return {
    type: "RESET_LOGIN_FORM"
  }
}



// ASYNCH
export const login = (credentials, history) => {
  return dispatch => { // allowed becuase of thunk
    fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST", // sending data of a new user
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(resp => resp.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user.data.attributes))
        // dispatch(getRecipes())
        dispatch(resetLoginForm())
        history.push('/') // if logged in successfuly change url
      }
    })
    .catch(console.log)
  }
}

export const logout = (history) => { // takes care of clearing session in backend 
  return dispatch => {
    // dispatch(clearCurrentUser() // optimistic 
    dispatch(clearRecipes())
    return fetch('http://localhost:3001/api/v1/logout', {
      credentials: "include", // sends back cookies
      method: "DELETE"
    }) 
    .then(dispatch(clearRecipeForm()))
    .then(dispatch(clearCurrentUser())) //** would be pessimistic 
    // .then(history.push('/'))
    .catch(console.log)
  }
}