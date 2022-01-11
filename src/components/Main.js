import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../redux/actions/currentUser'
import { Switch, Route, withRouter } from 'react-router-dom'
import CreateRecipeForm from './CreateRecipeForm'
import Recipes from './Recipes'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
// import Navbar from './Navbar'

class Main extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const {loggedIn} = this.props
    return (
      <div className='Main'>
        {/* { loggedIn ? <Navbar /> : <Home />} */}
        <Switch>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/recipes' component={Recipes}/>
          <Route exact path='/' render={(props)=> loggedIn ? null : <Home {...props}/>}/>
          <Route exact path='/recipes/new' component={CreateRecipeForm}/>
        </Switch>
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