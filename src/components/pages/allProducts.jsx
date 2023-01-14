import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import FilterDialog from "../Dialog/filterDialog";
import FilterBar from "../Filterbar/filterBar";
import FilterResult from "../Filterbar/filterResult";

const categoryList = [
  "Electronics",
  "Cameras",
  "Laptops",
  "Accessories",
  "Headphones",
  "Food",
  "Books",
  "Clothes/Shoes",
  "Beauty/Health",
  "Sports",
  "Outdoor",
  "Home",
];



function AllProducts() {
  const [activeCategory, setActiveCategory] = useState("All");
  const[filterDialogOpen,setFilterDialogOpen]=useState(false);

  if(filterDialogOpen){
    return  <FilterDialog filterDialogOpen={filterDialogOpen} setFilterDialogOpen={setFilterDialogOpen}/>
  }

  return (
    <div>
      
      <div className="flex">
        <div className=" hidden md:block h-screen sticky  top-10 lg:top-20">
          <FilterBar
            categoryList={categoryList}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        <div className="fixed top-25 right-2 md:hidden" onClick={e=>{setFilterDialogOpen(true)}}>
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>
        <div>
          <FilterResult />
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
