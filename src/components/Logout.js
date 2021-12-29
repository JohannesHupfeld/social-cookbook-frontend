// REDUX
import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/currentUser.js'

const Logout = ({ logout }) => {

  return (
    <form onSubmit={logout}>
      <input type="submit" value="Logout" />
    </form>
  )
}

export default connect(null, { logout } )(Logout)
// if null isnt stated then itll look at it as the map state