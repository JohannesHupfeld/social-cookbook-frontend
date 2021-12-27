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
    return fetch()
  }
}
