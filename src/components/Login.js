// REDUX
import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../redux/actions/loginForm.js'
import { login } from '../redux/actions/currentUser.js'

const Login = ({ loginForm, updateLoginForm, login }) => {

  const handleFormChange = (e) => {
    const { name, value } = e.target
    const updateFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updateFormInfo)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    login(loginForm)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input placeholder="username" value={loginForm.username} name="username" type="text" onChange={handleFormChange} /> 
      <input placeholder="password" value={loginForm.password} name="password" type="text" onChange={handleFormChange} /> 
      <input type="submit" value="Log In" />
    </form>
  )
}

// this gives me an argument coming to this component that looks like this
// {username: "joeyhup", password: "password"}
const mapStateToProps = (state) => {
  return {
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)
// export default connect(mapStateToProps, { updateLoginForm: updateLoginForm })(Login)