import React from 'react'
import './App.css';
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './redux/actions/currentUser.js'

class App extends React.Component { // made a class to have componentDidMount

  componentDidMount() {
    this.props.getCurrentUser()
  } // gets my current user 

  render() {
    return (
      this.props.currentUser ? <Logout /> : <Login /> 
    );
  }
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
