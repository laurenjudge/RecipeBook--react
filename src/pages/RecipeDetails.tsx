import { useParams } from "react-router-dom"
import getRecipeById from "../api/getRecipeById"
import Card from "../components/Card"
import Image from "../components/Image"


export default function RecipeDetails() {
  const { recipeType, id } = useParams()

  const {
    isLoading,
    hasError,
    recipe,
  } = getRecipeById(recipeType, id)

  return <>
    { recipe &&
      <Card variant="glass">
        <div className="flex gap-5 mb-5">
          <div className="w-40">
            <Image
              alt={recipe.name}
              src={recipe.image}
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">
              {recipe.name}
            </h1>
            <p className="mt-2 text-sm">{recipe.description}</p>
          </div>
        </div>

        <div className="p-2 border border-gray-400 rounded">
          {
            recipe.ingredients &&
            <>
              <h2 className="font-bold underline text-l sm:text-xl">Ingredients:</h2>
              <ul className="pl-4 list-disc">
                {
                  recipe.ingredients.map((e, i) =>
                    <li key={i}>{e}</li>
                  )
                }
              </ul>
            </>
          }

          {
            recipe.instructions &&
            <>
              <h2 className="mt-4 mb-1 font-bold underline text-l sm:text-xl">Instructions:</h2>
              <ol className="pl-4 list-decimal">
                {
                  recipe.instructions.map((e, i) =>
                    <li key={i} className="mb-3">{e}</li>
                  )
                }
              </ol>
            </>
          }
        </div>
      </Card>
    }
  </>
}