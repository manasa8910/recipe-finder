import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=332c41868373451a947c442f866b4261&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {searchedRecipes.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg overflow-hidden shadow-md"
        >
          <Link to={"/recipe/" + item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <h4 className="text-center py-2">{item.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Searched;
