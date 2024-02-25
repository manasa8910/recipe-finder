import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams(); // get param in api

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=332c41868373451a947c442f866b4261&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg overflow-hidden shadow-md relative"
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
    </motion.div>
  );
}

export default Cuisine;
