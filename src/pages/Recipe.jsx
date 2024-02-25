import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";

function Recipe({ recipes, setRecipes }) {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const [favourite, setFavourite] = useState(true);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=332c41868373451a947c442f866b4261`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };
  const handleFavourite = () => {
    if (favourite === false) {
      //push params in recipes
      setRecipes([...recipes, params]);
    } else {
      const updatedRecipes = recipes.filter((recipe) => recipe != params);
      setRecipes(updatedRecipes);
    }
    setFavourite(!favourite);
  };

  useEffect(() => {
    fetchDetails();
    //if param is present in recipes, change favourite to true
    const isFavorited = recipes.some((recipe) => recipe.id === details.id);
    setFavourite(isFavorited);
  }, [params.name]);

  return (
    <div className="mt-8 mb-20 flex">
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-4 ">{details.title}</h2>
        <div className="relative">
          <FaHeart
            onClick={handleFavourite}
            className={`absolute right-3 top-3 text-2xl ${
              favourite ? "text-pink-600" : "text-gray-600"
            } cursor-pointer`}
          />

          <img
            className="w-full rounded-md"
            src={details.image}
            alt={details.title}
          />
        </div>
      </div>
      <div className="ml-10 w-1/2">
        <button
          className={`px-4 py-2 border-2 border-black font-semibold mr-4 ${
            activeTab === "instructions"
              ? "bg-gray-900 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </button>
        <button
          className={`px-4 py-2 border-2 border-black font-semibold ${
            activeTab === "ingredients"
              ? "bg-gray-900 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </button>
        {activeTab === "instructions" && (
          <div className="mt-4">
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul className="mt-4">
            {details.extendedIngredients &&
              details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id} className="text-lg">
                  {ingredient.original}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Recipe;
