import React from 'react'
import Logout from './Logout'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


const Navbar = ({ loggedIn }) => {
  return (
    <div className='Navbar'>
      <NavLink to='/recipes'>Recipes</NavLink>
      <br></br>
      <NavLink to='/recipes/new'>New Recipe</NavLink> 
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