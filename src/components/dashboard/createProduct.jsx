import { useEffect, useState } from "react";
import Select from "react-select";
import demoProductImage from "../../demoImages/productDemoImage1.jpg";

const categoryList = [
  { value: "Electronics", label: "Electronics" },
  { value: "Cameras", label: "Cameras" },
  { value: "Laptops", label: "Laptops" },
  { value: "Accessories", label: "Accessories" },
  { value: "Headphones", label: "Headphones" },
  { value: "Food", label: "Food" },
  { value: "Books", label: "Books" },
  { value: "Clothes/Shoes", label: "clothes/Shooes" },
  { value: "Beauty/Health", label: "Beauty/Health" },
  { value: "Sports", label: "Sports" },
  { value: "Outdoor", label: "Outdoor" },
  { value: "Home", label: "Home" },
];

const customStyles = {
  container: (provided) => ({
    ...provided,
    width: "w-full",
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
    },
  }),
};
let productDescriptionArray = [1, 6];

function CreateProduct() {
  const [category, setCategory] = useState("Mobile");
  const [descriptionFieldNo, setDescriptionFieldNo] = useState(1);
  const handleCategoryChange = (item) => {
    setCategory(item.value);
    console.log(item.value);
  };


  // this is just for test
  const changeDescriptionFieldNumber = (changeValue) => {
    setDescriptionFieldNo(descriptionFieldNo + changeValue);
    if(changeValue==1){
       productDescriptionArray.push(descriptionFieldNo);
    }else{
        productDescriptionArray.pop();
    }
  
    console.log("increse", descriptionFieldNo, productDescriptionArray);
  };



  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="p-4 w-full  bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Create your product
            </h5>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Product Name
              </label>
              <input
                type="text"
                name="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="samsung F22"
                required
              />
            </div>
            <div>
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Brand/Seller
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                placeholder="samsung"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Category
              </label>
              <Select
                className="my-react-select-container"
                classNamePrefix="my-react-select"
                styles={customStyles}
                value={{ label: category }}
                onChange={handleCategoryChange}
                options={categoryList}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
            </div>

            <div>
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Price(Nrs)
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="100"
                min="0"
                onInput={(e) => {
                  e.target.validity.valid || (e.target.value = "");
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Stock
              </label>
              <input
                type="number"
                name="stock"
                id="stock"
                placeholder="100"
                min="0"
                onInput={(e) => {
                  e.target.validity.valid || (e.target.value = "");
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                for="file_input"
              >
                Upload Product Image
              </label>
              {/* <div className="flex justify-center mt-4 mb-2">
              <img class="w-36 h-36 rounded" src={demoProductImage} alt="Large avatar"></img>
              </div> */}
              <input
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
            </div>
          </form>
        </div>

        <div className="p-4 w-full md:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <div className="flex justify-center mt-4 mb-2">
              <img
                class="w-36 h-36 rounded"
                src={demoProductImage}
                alt="Large avatar"
              ></img>
            </div>
            <h5 className=" flex justify-between w-fulltext-xl font-medium text-gray-900 dark:text-white">
              Product description
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={e=>changeDescriptionFieldNumber(1)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </h5>

            {productDescriptionArray.map((product, index) => {
              return (
                <div className="w-full flex justify-between items-center">
                  {/* <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label> */}

<input
                    type="text"
                    name="decription"
                    id="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="eg.4Gb RAM,octa-core processor"
                    required
                    
                  />

                 
                  <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                    onClick={e=>changeDescriptionFieldNumber(-1)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  </div>
                
                </div>
              );
            })}

        
           
<div className="w-full flex justify-center m-4">
        <button
          type="submit"
          className="w-content max-w-xs text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Product
        </button>
      </div>
          </form>
        </div>
      </div>
     
    </div>
  );
}

export default CreateProduct;
