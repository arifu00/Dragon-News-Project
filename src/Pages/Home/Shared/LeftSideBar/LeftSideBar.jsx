import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#403F3F] p-4">
        All Categories.
      </h2>
      {categories.map(
        (category => (
          <div key={category.id} className="">
            <NavLink  key={category.id}
            to={`categories${category.id}`}
            className={({ isActive, isPending }) =>
              isPending ? "pl-3" : isActive ? "" : "text-xl font-medium text-[#9F9F9F] block my-5 pl-12"
            }
          >
            {category.name}
          </NavLink>
          </div>
        ))
      )}
    </div>
  );
};

export default LeftSideBar;
