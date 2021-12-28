import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../redux/actions/loginForm.js'



const Login = ({ loginForm, updateLoginForm }) => {

  const handleFormChange = (event) => {
    const { name, value } = event.target
    const updateFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updateFormInfo)
  }

  return (
    <form onSubmit={undefined}>
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

export default connect(mapStateToProps, { updateLoginForm } )(Login)
// export default connect(mapStateToProps, { updateLoginForm: updateLoginForm })(Login)