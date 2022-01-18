import React from 'react'
import './App.css';
import { connect } from 'react-redux'
import Main from './components/Main.js'
import Navbar from './components/Navbar.js';
// import Home from './components/Home';
import Logo from './components/Logo.js'
// import 'bootstrap/dist/css/bootstrap.min.css';

{/* <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/> */}

const App = ({ loggedIn }) => {
    return (
      <div className='App'> 
        { loggedIn ? <Navbar /> : <Logo />} 
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
