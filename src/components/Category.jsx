import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <div className="flex justify-center my-8 flex-wrap">
      <NavLink to={"/cuisine/Italian"} className="category-link">
        <FaPizzaSlice className="category-icon" />
        <h4 className="text-white text-sm">Italian</h4>
      </NavLink>
      <NavLink to={"/cuisine/American"} className="category-link">
        <FaHamburger className="category-icon" />
        <h4 className="text-white text-sm">American</h4>
      </NavLink>
      <NavLink to={"/cuisine/Thai"} className="category-link">
        <GiNoodles className="category-icon" />
        <h4 className="text-white text-sm">Thai</h4>
      </NavLink>
      <NavLink to={"/cuisine/Japanese"} className="category-link">
        <GiChopsticks className="category-icon" />
        <h4 className="text-white text-sm">Japanese</h4>
      </NavLink>
    </div>
  );
}

export default Category;
