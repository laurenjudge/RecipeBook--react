import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import getRecipeById from "../api/getRecipeById"
import Card from "../components/Card"
import Image from "../components/Image"
import Loader from '../components/Loader'
import DropdownButton from '../components/DropdownButton'
import { CollectionOptions } from '../types/recipes.types'

export default function RecipeDetails() {
  const { recipeType, id } = useParams()
  
  const {
    isLoading,
    recipe,
  } = getRecipeById(recipeType as CollectionOptions, id)

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
        <div className="gap-5 mb-5 sm:flex">
          <div className="flex items-center overflow-hidden rounded-md sm:w-40 h-52 sm:h-[unset]">
            <Image
              alt={recipe.name}
              src={recipe.image}
            />
          </div>
          <div>
            <h1 className="my-2 text-2xl font-bold sm:mt-0 sm:text-3xl">
              {recipe.name}
            </h1>
            {
              recipe.description &&
              <p className="text-sm text-gray-500">{recipe.description}</p>
            }
            {
              recipe.link &&
              <a className="mb-1 text-sm text-blue-600/60 hover:underline hover:text-blue-600/70" href={recipe.link} target="_blank">
                Original Recipe
                <svg height="10" width="10" className="inline-block ml-1" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 509 511.54"><path fillRule="nonzero" fill="currentColor" d="M447.19 347.03c0-17.06 13.85-30.91 30.91-30.91 17.05 0 30.9 13.85 30.9 30.91v87.82c0 21.08-8.63 40.29-22.51 54.18-13.88 13.88-33.09 22.51-54.18 22.51H76.69c-21.09 0-40.3-8.63-54.18-22.51C8.63 475.14 0 455.93 0 434.85V76.69c0-21.09 8.63-40.3 22.51-54.18C36.39 8.63 55.6 0 76.69 0h86.98c17.06 0 30.9 13.85 30.9 30.9 0 17.06-13.84 30.91-30.9 30.91H76.69c-4.07 0-7.82 1.69-10.51 4.37-2.68 2.69-4.37 6.44-4.37 10.51v358.16c0 4.06 1.69 7.82 4.37 10.5 2.69 2.68 6.44 4.38 10.51 4.38h355.62c4.07 0 7.82-1.7 10.51-4.38 2.68-2.68 4.37-6.44 4.37-10.5v-87.82zm0-243.56L308.15 244.28c-11.91 12.12-31.45 12.28-43.56.37-12.11-11.91-12.28-31.45-.37-43.56L401.77 61.81H309.7c-17.06 0-30.9-13.85-30.9-30.91 0-17.05 13.84-30.9 30.9-30.9h168.4C495.15 0 509 13.85 509 30.9v165.04c0 17.06-13.85 30.9-30.9 30.9-17.06 0-30.91-13.84-30.91-30.9v-92.47z"/></svg>
                {/* <svg height="10" width="10" className="inline-block ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.6 122.88"><path fill="currentColor" d="M110.6 72.58c0-3.19 2.59-5.78 5.78-5.78 3.19 0 5.78 2.59 5.78 5.78v33.19c0 4.71-1.92 8.99-5.02 12.09a17.06 17.06 0 0 1-12.09 5.02H17.11c-4.71 0-8.99-1.92-12.09-5.02A17.06 17.06 0 0 1 0 105.77V17.19C0 12.48 1.92 8.2 5.02 5.1 8.12 2 12.4.08 17.11.08h32.98c3.19 0 5.78 2.59 5.78 5.78 0 3.19-2.59 5.78-5.78 5.78H17.11c-1.52 0-2.9.63-3.91 1.63a5.511 5.511 0 0 0-1.63 3.91v88.58c0 1.52.63 2.9 1.63 3.91a5.511 5.511 0 0 0 3.91 1.63h87.95c1.52 0 2.9-.63 3.91-1.63s1.63-2.39 1.63-3.91V72.58zm1.82-55.12L54.01 76.6a5.776 5.776 0 0 1-8.16.07 5.776 5.776 0 0 1-.07-8.16l56.16-56.87H78.56c-3.19 0-5.78-2.59-5.78-5.78 0-3.19 2.59-5.78 5.78-5.78h26.5c5.12 0 11.72-.87 15.65 3.1 2.48 2.51 1.93 22.52 1.61 34.11-.08 3-.15 5.29-.15 6.93 0 3.19-2.59 5.78-5.78 5.78-3.19 0-5.78-2.59-5.78-5.78 0-.31.08-3.32.19-7.24.16-6.04 1.13-14.04 1.62-19.52z"/></svg> */}
              </a>
            }
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
              {
                recipe?.notes &&
                <p className="my-1 text-sm sm:text-base">{recipe.notes}</p>
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