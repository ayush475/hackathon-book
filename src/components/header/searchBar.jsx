import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const categoryList = [
  { value: "Bathroom", label: "Bathroom" },
  { value: "Room", label: "Room" },
  { value: "Building", label: "Building" },
  { value: "Kitchen", label: "Kitchen" },
  { value: "Others", label: "Others" },
  // { value: "Food", label: "Food" },
  // { value: "Books", label: "Books" },
  // { value: "Clothes/Shoes", label: "Clothes/Shooes" },
  // { value: "Beauty/Health", label: "Beauty/Health" },
  // { value: "Sports", label: "Sports" },
  // { value: "Outdoor", label: "Outdoor" },
  // { value: "Home", label: "Home" },
];

const customStyles = {
  container: (provided) => ({
    ...provided,
    width: "max-content",
  }),
  menu: (base) => ({
    ...base,

    width: "max-content",
    minWidth: "100%",
  }),
  control: (base, state) => ({
    ...base,
 
  
    border: state.isFocused ? 0 : 0,
    // This line disable the blue border
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
   boxShadow:"none"
      
    },
  }),
};

function  SearchBar() {
  const [category, setCategory] = useState("All");

  const handleCategoryChange = (item) => {
    setCategory(item.value);
    console.log(item.value);
  };

  const adjustSelectWidth = (e) => {
    const optionValue = this.get("members").value;
    const optionTextLength = document.querySelector(
      `option[value="${optionValue}"]`
    ).innerHTML.length;
    e.style.width = optionTextLength * 8 + "px";
  };

  return (
    <div>
      <form>
        <div className="flex">
          {/* <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Your Email
          </label> */}

          <div className=" shrink grow   z-100   text-sm font-medium  text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
            <Select
              className="my-react-select-container"
              classNamePrefix="my-react-select"
              components={{
                IndicatorSeparator: () => null,
              }}
              styles={customStyles}
              value={{ label: category }}
              onChange={handleCategoryChange}
              options={categoryList}
            />
          </div>
         
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search items"
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
