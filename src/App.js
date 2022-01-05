import React from 'react'
import './App.css';
// import Navbar from './components/Navbar.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './redux/actions/currentUser.js'
import { Route, withRouter } from 'react-router-dom'
import Signup from './components/Signup.js'
import Recipes from './components/Recipes.js'
import Login from './components/Login.js'
import Main from './components/Main.js'
class App extends React.Component { // made a class to have componentDidMount

  componentDidMount() {
    this.props.getCurrentUser()
  } // gets my current user 
  
  render() {
    const {loggedIn} = this.props
    return (
      <div className='App'> 
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/' render={(props)=> loggedIn ? <Recipes {...props} /> :<Main {...props}/>}/>
        <Route exact path='/recipes' component={Login}/>
        {/* <Navbar /> */}
      </div> 
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })

}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));

// export default App
