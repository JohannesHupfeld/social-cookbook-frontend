// import React from 'react'
// import  Recipes from './Recipes.js'
// import Login from '../components/Login.js'
// import Signup from '../components/Signup.js'
// import Home from '../components/Home.js'
// import { Route } from 'react-router-dom'
// import { connect } from 'react-redux'


// class Main extends React.Component {
  
  
// render(currentUser) {
//   const loggedIn = !!currentUser
//   return (
//     <div className='Main'>
//       <Route exact path='/' render={() => loggedIn ? <Recipes /> : <Home />}/>
//       <Route exact path='/signup' component={Signup}/>
//       <Route exact path='/login' component={Login}/>
//       <Route exact path='/recipes' component={Recipes}/>
//       <Recipes />
//     </div>
//     )
//   }
// }

// const mapStateToProps = ({currentUser}) => {
//   return {
//     currentUser
//   }
// }

// export default connect(mapStateToProps)(Main)