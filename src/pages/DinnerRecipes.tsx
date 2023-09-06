import RecipeItemList from "../components/RecipeItemList"
import getRecipes from "../api/getRecipes"

export default function DinnerRecipes() {
  const {
    isLoading,
    hasError,
    recipes,
  } = getRecipes("dinner-recipes")


  return (
    <>
      {
        <RecipeItemList recipes={recipes} isLoading={isLoading} hasError={hasError} recipeType="dinner-recipes" />
      }
    </>
  )
}