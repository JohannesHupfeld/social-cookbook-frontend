import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../redux/actions/loginForm.js'

const Login = ({ username, password, updateLoginForm }) => {
  return (
    <form onSubmit={undefined}>
      <input placeholder="username" value={username} name="username" type="text" onChnage={updateLoginForm} /> 
      <input placeholder="password" value={password} name="password" type="text" onChnage={updateLoginForm} /> 
      <input type="submit" value="Log In" />
    </form>
  )
}

// this gives me an argument coming to this component that looks like this
// {username: "joeyhup", password: "password"}
const mapStateToProps = (state) => {
  return {
    username: state.loginForm.username,
    password: state.loginForm.password
  }
}

export default connect(mapStateToProps, { updateLoginForm } )(Login)
// export default connect(mapStateToProps, { updateLoginForm: updateLoginForm })(Login)