import RecipeItemList from "../../components/RecipeItemList"
import getRecipes from "../../api/getRecipes"

export default function CookingRecipesList() {
  const {
    isLoading,
    hasError,
    recipes,
  } = getRecipes("dinner-recipe")


  return (
    <>
      {
        <RecipeItemList recipes={recipes} isLoading={isLoading} hasError={hasError}/>
      }
    </>
  )
}