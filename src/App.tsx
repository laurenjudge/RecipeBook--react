import { Routes, Route } from "react-router-dom";
import BakingList from "./pages/Baking/BakingList"
import CookingRecipesList from "./pages/CookingRecipes/CookingRecipesList"
import CocktailsList from "./pages/Cocktails/CocktailsList"
import NotFound from "./pages/NotFound"

import NavBar from './layouts/NavBar'

function App() {
  return (
    <>
      <NavBar/>
      <div className="w-11/12 max-w-[600px] mx-auto my-8">
        <Routes>
          <Route path="/" element={<CookingRecipesList />} />
          <Route path="/cocktails" element={<CocktailsList />} />
          <Route path="/baking" element={<BakingList />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
