import React from 'react'
import Logout from './Logout'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


const Navbar = ({ loggedIn }) => {
  return (
    <div className='Navbar'>
      <br></br>
      <NavLink to='/recipes' activeClasssName="navbar-nav-active" className="navbar-nav">Recipes</NavLink>
      <br></br>
      <br></br>
      <NavLink to='/recipes/new' activeClassName="navbar-nav-active" className="navbar-nav">New Recipe</NavLink> 
      <br></br>
      <br></br>
      { loggedIn ? <Logout /> : null}   
    </div>
  )
}

const mapStateToProps = ({currentUser}) => {
  return ({
    currentUser,
    loggedIn: !!currentUser
  })
}

export default connect(mapStateToProps)(Navbar)