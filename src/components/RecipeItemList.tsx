import Card from './Card'
import Image from './Image'
import { RecipeList } from '../types/recipes.types'

interface RecipeItems {
  recipes: RecipeList
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
            return <Card variant="glass" key={index} classes="flex">
              <div className="mr-3 w-28">
                <Image
                  alt={recipe.name}
                  src={recipe.image}
                />
              </div>
              <h2 className="text-xl font-bold">
                {recipe.name}
              </h2>
            </Card>
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
      </div>
    </>
  )
}