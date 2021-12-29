import React from 'react'
import './App.css';
import  Navbar from './components/Navbar.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './redux/actions/currentUser.js'

class App extends React.Component { // made a class to have componentDidMount

  componentDidMount() {
    this.props.getCurrentUser()
  } // gets my current user 

  render() {
    return (
      <Navbar />
    );
  }
}

export default connect(null, { getCurrentUser })(App);
