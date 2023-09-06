import RecipeItemList from "../components/RecipeItemList"
import getRecipes from "../api/getRecipes"

export default function BakingList() {
  const {
    isLoading,
    hasError,
    recipes,
  } = getRecipes("baking")

  return (
    <>
      {
        <RecipeItemList recipes={recipes} isLoading={isLoading} hasError={hasError} recipeType="baking" />
      }
    </>
  )
}