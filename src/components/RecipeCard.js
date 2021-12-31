import React from 'react'

const RecipeCard = ({ recipe }) => {
  return (  
    <div className='RecipeCard'> 
      
      <h2>{recipe.attributes.name}</h2>
      <img src={recipe.attributes.image_url} alt=""></img>
      <br></br>
      <strong>Ingredients</strong>
      <h3>{recipe.attributes.ingredients}</h3>
      <strong>Instructions</strong>
      <h3>{recipe.attributes.instructions}</h3>
      <h4> created on {recipe.attributes.created_at}</h4>
      
    </div>
  )
} 

export default RecipeCard 