import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase.config";
import { CollectionOptions } from '../types/recipes.types'

export default function getRecipes(collectionName: CollectionOptions) {

  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [recipes, setRecipes] = useState<any[]>([])

  useEffect(() => {
    setIsLoading(true)
    setHasError(false)

    getDocs(collection(database, collectionName))
    .then((querySnapshot)=>{
      const newData = querySnapshot.docs
        .map((doc) => ({...doc.data(), id:doc.id }))
        
      setRecipes(newData)
      setIsLoading(false)
    })
    .catch(err => {
      setIsLoading(false)
      setHasError(true)
    })
  }, [])

  return { isLoading, hasError, recipes }
}