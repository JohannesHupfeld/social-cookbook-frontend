// SYNCHRONOUS
export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user // payload: user 

  }
} // expect this action creator to recieve a user object as an argument which will then take the place of the second argument in this returning action 

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

// ASYNCHRONOUS
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
        dispatch(setCurrentUser(user.data.attributes))
      }
    })
    .catch(console.log)
  }
}

export const login = (credentials) => {
  return dispatch => {
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
        dispatch(resetLoginForm())
      }
    })
    .catch(console.log)
  }
}

export const logout = () => { // takes care of clearing session in backend 
  return dispatch => {
    dispatch(clearCurrentUser()) // optimistic 
    return fetch('http://localhost:3001/api/v1/logout', {
      credentials: "include", // sends back cookies
      method: "DELETE"
    })
    // .then(dispatch(clearCurrentUser())) ** would be pessimistic 
  }
}

// thunk allows us to return an action creator "dispatch" which is a function