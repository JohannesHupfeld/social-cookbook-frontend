import React from 'react'
import './App.css';
import  Navbar from './components/Navbar.js'
import  Login from './components/Login.js'
import  Signup from './components/Signup.js'
import  Recipes from './components/Recipes.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './redux/actions/currentUser.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends React.Component { // made a class to have componentDidMount

  componentDidMount() {
    this.props.getCurrentUser()
  } // gets my current user 

  render() {
    return (
      <Router>
        <div className='App'>      
          <Navbar /> 
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/recipes' component={Recipes}/>
        </div> 
      </Router> 
    );
  }
}

export default connect(null, { getCurrentUser })(App);
