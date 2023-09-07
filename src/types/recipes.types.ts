export interface IRecipe {
  id: string
  name: string
  notes?: string
  image: string
  ingredients: string[]
  instructions?: string[]
  description?: string
  link?: string
  numberOfServings?: string
}

export type RecipeList = IRecipe[]

export type CollectionOptions = 'dinner-recipes' | 'cocktails' | 'baking'
