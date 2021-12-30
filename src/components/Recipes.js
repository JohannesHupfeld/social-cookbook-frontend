import React from 'react'
import RecipeCard from './RecipeCard.js'
import { connect } from 'react-redux'


const Recipes = (props) => {
  const recipeCards = props.recipes.map(r => <RecipeCard recipe={r} key={r.id} />)
  return (
    recipeCards
  )
}

const mapStateToProps = (state) => { // state from store 
  return { // returns object
    recipes: state.recipes
  }
}

// const mapStateToProps = ({ Recipes }) => { // destructured
//   return {
//     Recipes
//   }
// }


// const mapStateToProps = ({ Recipes }) => { // state from store 
//   const recipeId = Recipes.map(r => r.user_id) // get recipes with user_id = to ?
//   return { // returns object
//     myRecipes: recipeId
//   }
// }

export default connect(mapStateToProps)(Recipes)
// connect is a function that returns a function and takes up to 4 arguments 