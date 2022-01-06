import React from 'react'
import './App.css';
import { connect } from 'react-redux'
import Main from './components/Main.js'
import Navbar from './components/Navbar.js';
// import Home from './components/Home';

const App = ({ loggedIn }) => {
    return (
      <div className='App'> 
        { loggedIn ? <Navbar /> : null} 
        <Main />
      </div> 
    );
}

const mapStateToProps = ({currentUser}) => {
  return ({
    loggedIn: !!currentUser
  })
}

export default connect(mapStateToProps)(App)
