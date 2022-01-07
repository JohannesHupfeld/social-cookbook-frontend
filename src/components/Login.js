// REDUX
import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../redux/actions/loginForm.js'
import { login } from '../redux/actions/loginForm'
import { Link } from 'react-router-dom'

const Login = ({ loginForm, updateLoginForm, login, history}) => {

  const handleFormChange = (e) => {
    const { name, value } = e.target
    const updateFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updateFormInfo)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(loginForm, history) // histroy is a mutable object
  }

  return (
    <div className='Login'>
      <form onSubmit={handleSubmit}>
        <h4>Please login below </h4>
        <input placeholder="username" value={loginForm.username} name="username" type="text" onChange={handleFormChange} />
        <input placeholder="password" value={loginForm.password} name="password" type="text" onChange={handleFormChange} />
        <input type="submit" value="Login" />
        <br></br>
        <br></br>
        <Link to="/signup" className='login-to-signup'> or Signup</Link>
      </form>
    </div>
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