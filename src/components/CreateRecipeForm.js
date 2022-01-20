import React from 'react'
import { connect } from 'react-redux'
import { updateCreateRecipeForm } from '../redux/actions/recipeForm.js'
import { createRecipe } from '../redux/actions/recipeForm.js'

const CreateRecipeForm = ({ recipeForm, updateCreateRecipeForm, createRecipe, history}) => {

  const handleFormChange = (e) => {
    const { name, value } = e.target
    const updateFormInfo = {
      ...recipeForm,
      [name]: value
    }
    updateCreateRecipeForm(updateFormInfo)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createRecipe(recipeForm, history)
  }

  return (
      <div className='Create-Recipe-Form'>
        <form onSubmit={handleSubmit}>
          <br></br>
          <label for="name">Name</label>
          <br></br>
          <input placeholder='name' value={recipeForm.name} name="name" type="text" onChange={handleFormChange} />
          <br></br>
          <label for="Image">Image</label>
          <br></br>
          <input placeholder='image_url' value={recipeForm.image_url} name="image_url" type="text" onChange={handleFormChange} />
          <br></br>
          <label for="ingredients">Ingredients</label>
          <br></br>
          <textarea placeholder='ingredients' value={recipeForm.ingredients} name="ingredients" type="text_area" onChange={handleFormChange} />
          <br></br>
          <label for="instructions">Instructions</label>
          <br></br>
          <textarea placeholder='instructions' value={recipeForm.instructions} name="instructions" type="text_area" onChange={handleFormChange} />
          <br></br>
          <input type="submit" value="Create Recipe" />
        </form>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    recipeForm: state.recipeForm
  }
}

export default connect(mapStateToProps, { updateCreateRecipeForm, createRecipe })(CreateRecipeForm) 