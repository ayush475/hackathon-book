import { useState } from "react";
import { Link } from "react-router-dom";
import MultiRangeSlider from "./slider/multiRangeSlider";

// const  categoryList= [
//   'Electronics',
//   'Cameras',
//   'Laptops',
//   'Accessories',
//   'Headphones',
//   'Food',
//   "Books",
//   'Clothes/Shoes',
//   'Beauty/Health',
//   'Sports',
//   'Outdoor',
//   'Home'
// ]

const brandList = ["Samsung", "Redmi", "One plus"];

function FilterBar(props) {
  const { categoryList, activeCategory, setActiveCategory } = props;
  const[activeBrand,setActiveBrand]=useState("All");

  return (
    <aside className=" w-14 md:w-48 lg:w-64 " aria-label="Sidebar">
      <div className=" min-h-screen overflow-y-auto py-4 px-3 bg-gray-50  dark:bg-gray-800">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Categories
        </h5>
        <ul className="space-y-0">
          <li
            className="flex flex-auto items-center cursor-pointer  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={(e) => {
              setActiveCategory("All");
            }}
          >
            <span
              className=" ml-3 whitespace-nowrap"
              style={{ color: `${activeCategory === "All" ? "blue" : ""}` }}
            >
              All
            </span>
            <span
              className="text-xs whitespace-nowrap self-end"
              style={{ color: `${activeCategory === "All" ? "gray" : ""}` }}
            >
              (100)
            </span>
          </li>
          {categoryList.map((category, index) => {
            return (
              <li
                className="flex items-center cursor-pointer  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={(e) => {
                  setActiveCategory(category);
                }}
              >
                <span
                  className=" ml-3 whitespace-nowrap"
                  style={{
                    color: `${activeCategory === category ? "blue" : ""}`,
                  }}
                >
                  {category}
                </span>
                <span
                  className="text-xs ml-1 whitespace-nowrap self-end"
                  style={{ color: `${activeCategory === "All" ? "gray" : ""}` }}
                >
                  (100)
                </span>
              </li>
            );
          })}

          
         
        </ul>

        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Price
        </h5>
        <div className="pt-6 pb-2">
        <MultiRangeSlider/>
        </div>
       
        {/* <ul className="space-y-0">
          <li
            className="flex flex-auto items-center cursor-pointer  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            
          >
            <span
              className=" ml-3 whitespace-nowrap"
            
            >
              Min
            </span>
            <span
              className="text-xs whitespace-nowrap self-end"
         
            >
              <input type="range" min="0" max="100" value="40" className="range range-primary z-[100]" />
            </span>
          </li>
         

         
        
        </ul> */}
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Brand
        </h5>
        <ul className="space-y-0">
          <li
            className="flex flex-auto items-center cursor-pointer  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={(e) => {
              setActiveBrand("All");
            }}
          >
            <span
              className=" ml-3 whitespace-nowrap"
              style={{ color: `${activeBrand === "All" ? "blue" : ""}` }}
            >
              All
            </span>
            <span
              className="text-xs whitespace-nowrap self-end"
              style={{ color: `${activeCategory === "All" ? "gray" : ""}` }}
            >
              (100)
            </span>
          </li>
          {brandList.map((brand, index) => {
            return (
              <li
                className="flex items-center cursor-pointer  text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={(e) => {
                  setActiveBrand(brand);
                }}
              >
                <span
                  className=" ml-3 whitespace-nowrap"
                  style={{
                    color: `${activeBrand === brand ? "blue" : ""}`,
                  }}
                >
                  {brand}
                </span>
                <span
                  className="text-xs ml-1 whitespace-nowrap self-end"
                  style={{ color: `${activeBrand === "All" ? "gray" : ""}` }}
                >
                  (100)
                </span>
              </li>
            );
          })}

         
        
        </ul>
        </ul>
      </div>

    </aside>
  );
}

export default FilterBar;
