import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import currentUser from './reducers/currentUser.js'
import signupForm from './reducers/signupForm.js'
import loginForm from './reducers/loginForm.js'
import recipes from './reducers/recipes.js'
import recipeForm from './reducers/recipeForm.js' //import reducer functions 

const reducer = combineReducers({
  currentUser, // keys in my redux store
  loginForm,
  signupForm,
  recipes,
  recipeForm // short hand
  // recipeForm: recipeform
})

// const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store