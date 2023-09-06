import RecipeItemList from "../components/RecipeItemList"
import getRecipes from "../api/getRecipes"

export default function CocktailsList() {
  const {
    isLoading,
    hasError,
    recipes,
  } = getRecipes("cocktails")

  return (
    <>
      {
        <RecipeItemList recipes={recipes} isLoading={isLoading} hasError={hasError} recipeType="cocktails" />
      }
    </>
  )
}
