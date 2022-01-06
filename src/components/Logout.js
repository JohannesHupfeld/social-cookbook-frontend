// REDUX
import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/loginForm.js'

const Logout = ({ logout, history }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    logout()
    history.push('/home')

  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="submit" value="Logout" />
    </form>
  )
}

export default connect(null, { logout } )(Logout)
// if null isnt stated then itll look at it as the map state