import { setCurrentUser } from './currentUser.js'
import { getRecipes } from './recipes.js'

// SYNCH
export const resetSignupForm = () => { // lives in login 
  return {
    type: "RESET_SIGNUP_FORM"
  }
}

export const updateSignupForm = (formData) => { // lives in login 
  return {
    type: "UPDATE_SIGNUP_FORM",
    formData
  }
}



// ASYNCH
export const signup = (credentials) => {
  return dispatch => {
    const credentialInfo = {
      user: credentials
    }
    fetch("http://localhost:3001/api/v1/signup", { //returns a promise
      credentials: "include",
      method: "POST", // sending data of a new user
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(credentialInfo)
    })
    .then(resp => resp.json()) //parses that promise to json
    .then(user => { // returns user 
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user.data.attributes))
        dispatch(getRecipes())
        dispatch(resetSignupForm())
      }
    })
    .catch(console.log)
  }
}