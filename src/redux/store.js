import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import users from './reducers/users.js'
import currentUser from './reducers/currentUser.js'


const reducer = combineReducers({
  users,
  currentUser
})

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store