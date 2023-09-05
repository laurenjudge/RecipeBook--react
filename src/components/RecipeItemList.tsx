import Card from './Card'
import Image from './Image'
import { RecipeList } from '../types/recipes.types'

interface RecipeItems {
  recipes: RecipeList
}

export default function RecipeItemList(props: RecipeItems) {
  return (
    <>
      <div className="grid gap-4">
        {
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
      </div>
    </>
  )
}