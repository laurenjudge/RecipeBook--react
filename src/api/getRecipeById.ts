import { useEffect, useState } from 'react'
import { getDoc, doc } from "firebase/firestore";
import { database } from "../firebase.config";
import { CollectionOptions, IRecipe } from '../types/recipes.types'

export default function getRecipeById(collectionName?: CollectionOptions, id?: string) {

  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [recipe, setRecipe] = useState<IRecipe | null>(null)

  useEffect(() => {
    setIsLoading(true)
    setHasError(false)

    if (collectionName && id) {
      getDoc(doc(database, collectionName, id))
      .then((querySnapshot)=>{
        const newData = querySnapshot.data()                
        setRecipe(newData as IRecipe)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
        setHasError(true)
      })
    }
  }, [collectionName, id])

  return { isLoading, hasError, recipe }
}