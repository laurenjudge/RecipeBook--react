import { Navigate, Routes, Route } from "react-router-dom";
import BakingList from "./pages/BakingList"
import DinnerRecipes from "./pages/DinnerRecipes"
import CocktailsList from "./pages/CocktailsList"
import NotFound from "./pages/NotFound"
import RecipeDetails from './pages/RecipeDetails'

import NavBar from './layouts/NavBar'

function App() {
  return (
    <>
      <NavBar/>
      <div className="w-11/12 max-w-[600px] mx-auto my-8">
        <Routes>
          <Route path="/" element={<Navigate to="/dinner-recipes" />} />
          <Route path="/dinner-recipes" element={<DinnerRecipes />} />
          <Route path="/cocktails" element={<CocktailsList />} />
          <Route path="/baking" element={<BakingList />} />
          <Route path={'/:recipeType/:id'} element={<RecipeDetails />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
