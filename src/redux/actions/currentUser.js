// synchronous 
export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user // payload: user 

  }
} // expect this action creator to recieve a user object as an argument which will then take the place of the second argument in this returning action 

// asynchronous
export const login = (credentials) => {
  return function dispatch() {
    return fetch("https://localhost3000/api/v1/login", {
      method: "POST", // sending data of a new user
      headers: {
        "Contenet-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        username: "joeyhup", 
        password: "password"
      })
    })
  }
}
