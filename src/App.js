import React from 'react'
import './App.css';
import { connect } from 'react-redux'
import Main from './components/Main.js'
import Navbar from './components/Navbar.js';

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
    currentUser,
    loggedIn: !!currentUser
  })
}

export default connect(mapStateToProps)(App)
