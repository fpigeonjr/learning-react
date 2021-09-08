import React from 'react'
import Ingredient from './Ingredient'

function IngredientsList() {
  return (
    <ul className="ingredients">
      {list.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  )
}

export default IngredientsList
