import { useState } from "react"
import RecipeItemList from "../../components/RecipeItemList"
import getRecipes from "../../api/getRecipes"
import Card from "../../components/Card"

export default function CookingRecipesList() {
  const dinnerRecipes = getRecipes('dinner-recipe')
  const {
    isLoading,
    hasError,
    recipes,
  } = getRecipes("dinner-recipe")


  return (
    <>
      {
        recipes && <RecipeItemList recipes={recipes} />
      }
    </>
  )
}