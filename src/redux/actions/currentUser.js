// synchronous 
export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user // payload: user 

  }
} // expect this action creator to recieve a user object as an argument which will then take the place of the second argument in this returning action 

// asynchronous
export const login = (credentials) => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
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
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
      method: "GET", // sending data of a new user
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
    })
    .then(resp => resp.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}