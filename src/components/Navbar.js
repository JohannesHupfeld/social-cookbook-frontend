import Login from './Login.js'
import Logout from './Logout.js'
import React from 'react'
import { connect } from 'react-redux'


const Navbar = ({ currentUser }) => { // currentUser comes from mapStateToProps

  return (
   <div className='nav-bar'>
     { currentUser ? <h2>Welcome {currentUser.name}</h2> : ""} 
     { currentUser ? <Logout /> : <Login /> } {/* wrapped in curlies because its js code jsx */}
   </div>
  )
}

const mapStateToProps = ({currentUser}) => { // destructing because currentUser is an object. comes from redux store
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Navbar)
// if null isnt stated then itll look at it as the map state