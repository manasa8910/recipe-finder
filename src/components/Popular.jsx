import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=332c41868373451a947c442f866b4261&number=9`
      ); //get 9 recipes
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));

      setPopular(data.recipes);
    }
  };

  return (
    <div className="my-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "1rem",
          }}
        >
          <div className="flex gap-5 overflow-scroll scroll">
            {popular.map((recipe) => (
              <SplideSlide key={recipe.id}>
                <Link to={"/recipe/" + recipe.id}>
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-[30vh]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <p className="absolute bottom-0 left-0 right-0 px-4 py-2 text-white font-semibold text-sm bg-gray-700 bg-opacity-50">
                      {recipe.title}
                    </p>
                  </div>
                </Link>
              </SplideSlide>
            ))}
          </div>
        </Splide>
      </div>
    </div>
  );
}

export default Popular;
