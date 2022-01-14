// REDUX
import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../redux/actions/signupForm.js'
import { signup } from '../redux/actions/signupForm'
import { Link } from 'react-router-dom'

const Signup = ({ signupForm, updateSignupForm, signup, history }) => { // arguments are state from store used as props

  const handleFormChange = (e) => {
    const { name, value } = e.target
    const updateFormInfo = {
      ...signupForm,
      [name]: value
    }
    updateSignupForm(updateFormInfo)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(signupForm, history)
  }

  function handleClick(){ // this and the button should be in its own component possibly in presentational folder 
    console.log("click")
    history.goBack()
  }
  
  return (
    <div className='Signup'>
      <form onSubmit={handleSubmit}>
        <h4>Please Signup Below</h4>
        <input placeholder="name" value={signupForm.name} name="name" type="text" onChange={handleFormChange} />
        <input placeholder="username" value={signupForm.username} name="username" type="text" onChange={handleFormChange} />
        <input placeholder="password" value={signupForm.password} name="password" type="text" onChange={handleFormChange} />
        <input type="submit" value="Signup" />
        <br></br>
        <br></br>
        <Link to="/login" className='signup-to-login'>or Login</Link>
        <br></br>
        <br></br>
        <button onClick={handleClick}>Back</button> 
      </form>
    </div>
  )
}

// this gives me an argument coming to this component that looks like this
// {username: "joeyhup", password: "password"}
const mapStateToProps = (state) => {
  return {
    signupForm: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup} )(Signup) // arguments are state grabbed from redux store then used as props above
// export default connect(mapStateToProps, { updateLoginForm: updateLoginForm })(Login)
