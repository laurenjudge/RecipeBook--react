export interface IRecipe {
  name: string
  notes?: string
  image: string
  ingredients: string[]
  instructions?: string[]
}

export type RecipeList = IRecipe[]