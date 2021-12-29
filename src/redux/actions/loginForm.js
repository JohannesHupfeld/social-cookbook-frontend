export const updateLoginForm = (formData) => { // without this you wouldnt see the username or password as you fill it in
  return {
    type: "UPDATE_LOGIN_FORM",
    formData
  }
}