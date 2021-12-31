import React from 'react'
import Login from './Login.js'
import Logout from './Logout.js'
import Signup from './Signup.js'
import Recipes from './Recipes.js'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'


const Navbar = ({ currentUser }) => { // currentUser comes from mapStateToProps

  return (
   <div className='Navbar'>
     { currentUser ? <h2>Welcome {currentUser.name}</h2> : <h2>Welcome to the CookBook App</h2>} 
     { currentUser ? <Logout /> : <h3>Login Here<Login /></h3>} 
     { currentUser ? <h3>Here are your Recipes<Recipes /></h3> : <h3>Signup Here<Signup /></h3>}
     <Route exact path='/signup' component={Signup}/>
     <Route exact path='/login' component={Login}/>
     {/* <Route exact path='/recipes' component={Recipes}/> */}
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