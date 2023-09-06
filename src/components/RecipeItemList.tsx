import { NavLink } from 'react-router-dom'
import { CollectionOptions, RecipeList } from '../types/recipes.types'
import Card from './Card'
import Image from './Image'
import Loader from './Loader'

interface RecipeItems {
  recipes: RecipeList
  recipeType: CollectionOptions
  isLoading: boolean
  hasError: boolean
}

export default function RecipeItemList(props: RecipeItems) {
  return (
    <>
      <div className="grid gap-4">
        {
          props.recipes &&
          props.recipes.map((recipe, index) => {
            return <NavLink key={index} to={`/${props.recipeType}/${recipe.id}`}>
              <Card variant="glass" classes="flex">
                <div className="w-20 mr-3 sm:w-28">
                  <Image
                    alt={recipe.name}
                    src={recipe.image}
                  />
                </div>
                <div>
                  <h2 className="font-bold text-l sm:text-xl">
                    {recipe.name}
                  </h2>
                  {
                    recipe.description &&
                    <p>{recipe.description}</p>
                  }
                </div>
              </Card>
            </NavLink>
          })
        }

        {
          props.isLoading &&
          <Loader />
        }

        {
          props.hasError &&
          <div>Oops, an error has occurred. Please reload the page.</div>
        }
      </div>
    </>
  )
}