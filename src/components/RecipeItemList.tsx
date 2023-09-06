import { NavLink } from 'react-router-dom'
import Card from './Card'
import Image from './Image'
import { CollectionOptions, RecipeList } from '../types/recipes.types'

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
          Array.from(Array(5)).map(
            (e, i) => 
              <Card variant="glass" key={i} classes="flex">
                <div className="mr-3 bg-gray-200 rounded-md w-28 h-28 animate-pulse"></div>
                <div className="w-3/5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
              </Card>
          )
        }

        {
          props.hasError &&
          <div>Oops, an error has occurred. Please reload the page.</div>
        }
      </div>
    </>
  )
}