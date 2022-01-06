// REDUX
import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/loginForm.js'
import { withRouter } from 'react-router-dom'

const Logout = ({ logout, history }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    logout()
    history.push('/')
  }
  return (
     <div className='Logout'>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Logout" />
      </form>
    </div>
  )
}

export default withRouter(connect(null, { logout } )(Logout))
// if null isnt stated then itll look at it as the map state