import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="relative flex items-center pl-5 pr-3 py-2 w-full rounded-lg bg-gray-800 gap-5 text-white overflow-hidden">
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          className="bg-gray-800  outline-none"
          placeholder="Search..."
        />
      </div>
    </form>
  );
}

export default Search;
