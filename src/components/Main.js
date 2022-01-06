import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../redux/actions/currentUser'
import { Route, withRouter } from 'react-router-dom'
import CreateRecipeForm from './CreateRecipeForm'
import Recipes from './Recipes'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'

class Main extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const {loggedIn} = this.props
    return (
      <div className='Main'>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/' render={(props)=> loggedIn ? <Recipes {...props} /> : <Home {...props}/>}/>
        {/* <Route exact path='/' render={(props) => !loggedIn ? <Home {...props}/> : <Recipes {...props}/>}/> */}
        <Route exact path='/recipes' component={Recipes}/>
        <Route exact path='/recipes/new' component={CreateRecipeForm}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(Main))