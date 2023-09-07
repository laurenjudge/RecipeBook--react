import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import getRecipeById from "../api/getRecipeById"
import Card from "../components/Card"
import Image from "../components/Image"
import Loader from '../components/Loader'
import DropdownButton from '../components/DropdownButton'

export default function RecipeDetails() {
  const { recipeType, id } = useParams()
  
  const {
    isLoading,
    hasError,
    recipe,
  } = getRecipeById(recipeType, id)

  const [calculatedIngredients, setCalculatedIngredients] = useState<null | string[]>(null)

  const handleCalculateIngredients = (numberOfServings: number) => {
    if (!recipe?.ingredients || recipe?.ingredients?.length === 0) {
      return
    }
    const calculatedIngredients =
      recipe?.ingredients?.map((originalIngredient) => {
        // in the db, ingredient amounts that should be calculated are escaped with []
        const findIngredientAmount: RegExpMatchArray | null =  originalIngredient.match(/((?<=\[)(.*)(?=\]))/g)
          if (!findIngredientAmount) {
            return originalIngredient
          }

          const calcAmount = parseFloat(findIngredientAmount[0]) * numberOfServings
          // Only keep decimal places if number is not a whole number
          const roundedAmount = calcAmount % 1 === 0 ? calcAmount.toString() : calcAmount.toFixed(1)
          //remove [] from showing in UI
          return originalIngredient.replace(/((?<=\[)(.*)(?=\]))/g, roundedAmount).replace("[", '').replace("]", '')
    })
    setCalculatedIngredients(calculatedIngredients)
  }

  useEffect(() => {
    handleCalculateIngredients(Number(recipe?.numberOfServings) || 2)
  }, [recipe])
  
  return <>
    {
      isLoading &&
      <Loader />
    }

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
            <p className="mt-2 text-sm text-gray-500">{recipe.description}</p>
          </div>
        </div>

        <div className="p-2 border border-gray-400 rounded">
          {
            calculatedIngredients &&
            <>
              <h2 className="font-bold underline text-l sm:text-xl">Ingredients:</h2>
              {
                recipeType === "cocktails" &&
                <DropdownButton
                  updateValue={ (e) => handleCalculateIngredients(Number(e)) }
                  label="Number of servings:"
                  value={ recipe?.numberOfServings || "2" }
                />
              }
              <ul className="pl-4 list-disc">
                {
                  calculatedIngredients?.map((e, i) =>
                    <li key={i} className="text-sm sm:text-base">{e}</li>
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
                    <li key={i} className="mb-3 text-sm sm:text-base">{e}</li>
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