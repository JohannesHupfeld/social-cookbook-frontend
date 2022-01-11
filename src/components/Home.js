import React from 'react'
// import Login from './Login'
// import Logout from './Logout'
// import Signup from './Signup'
import { Link } from 'react-router-dom'
import logo2 from '../logo2.png'

const Home = () => (
  <div className='Home'>
    <h1>
      <img src={logo2.png} className="home-logo" alt=""></img>
      <Link to='/signup'>Signup</Link>
      <br></br>
      or
      <br></br>
      <Link to='/login'>Login</Link>
    </h1>
  
  </div>
)

export default Home
