import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes, useLocation } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

function Pages({ recipes, setRecipes }) {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route
          path="/recipe/:name"
          element={<Recipe recipes={recipes} setRecipes={setRecipes} />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
