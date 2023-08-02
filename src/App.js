import React from "react";
import "./Components/Style.css";
import Meal from "./Components/Meal";
import Recipe from "./Components/Recipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Meal />} />
          <Route exact path="/:recipeId" element={<Recipe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
