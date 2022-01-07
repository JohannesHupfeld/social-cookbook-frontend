import React from 'react'
import RecipeCard from './RecipeCard.js'
import { connect } from 'react-redux' 

const Recipes = (props) => { //these props (recipes) are from mapStateToProps
  const recipeCards = props.recipes.map(r => <RecipeCard recipe={r} key={r.id} {...r} />) 
                // mapping over the properties of recipes, giving it a trip card with an argument of recipe and a key then using spreadoperator to put it in the recipecard 
  return (
    recipeCards 
    // recipeCards.currentUser ? recipeCards : null 
  )
}

const mapStateToProps = (state) => { // state from store 
  return { // returns object
    recipes: state.recipes //props are recipes that come from state (*look at redux store in redux chrome)
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