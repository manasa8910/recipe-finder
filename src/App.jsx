import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter, NavLink } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  return (
    <div className="App w-full md:w-[60%] m-auto ">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork className="text-3xl" />
          <NavLink to="/" className="text-xl font-semibold ml-2">
            Foodilicious
          </NavLink>
        </Nav>
        <Search />
        <Category />
        <Pages recipes={recipes} setRecipes={setRecipes} />
      </BrowserRouter>
    </div>
  );
}

const Nav = (props) => (
  <nav className="flex items-center justify-start p-8">{props.children}</nav>
);

export default App;
