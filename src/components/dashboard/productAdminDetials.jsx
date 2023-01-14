import { useEffect, useState } from "react";
import productDemoImage from "../../demoImages/productDemoImage1.jpg";
import Review from "../Review/review";

function ProductAdminDetails() {
  return (
    <div className="container">
      {/* productDetails */}
      <div className=" flex pt-2 pr-2 pl-2  flex-col md:flex-row ">
        <div className="   flex-1   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className=" flex    flex-col lg:flex-row ">
            <div className="  xs:max-w-xs  md:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src={productDemoImage} className="object-fill   " />
            </div>

            <div className="p-6 w-full min-w-sm flex-1  bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Samsung F22
              </h5>
              <div class="flex items-center mb-5">
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-7 h-7 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Brand : Samsung
              </p>
              <p className="mb-3 text-xl font-bold text-green-600 dark:text-green-400">
                NRs.20000
              </p>

              <div className="flex   flex-col sm:flex-row justify-between mt-6 items-center p-2">
                <button
                  type="button"
                  class="py-2 px-3 w-full  font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-blue-800"
                >
                  Delete
                </button>
                <button
                  type="button"
                  class="py-2 px-3 w-full    font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* order part */}
        <div className="p-6 w-full md:max-w-sm bg-slate-200 border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700">
          <h5 className="mb-4 text-lg tracking-wide font-bold  text-gray-900 dark:text-white">
            Details
          </h5>

          <div className="flex flex-col mt-1 mb-1">
            
            <div className="flex">
              <p className=" flex-1 break-all mb-3 gap-2 font-medium text-lg text-gray-700 dark:text-gray-400">
                Stock:
                <span className="ml-2">100</span>
              </p>

           
            </div>
           
            <div className="flex">
              <p className=" flex-1 break-all mb-3 gap-2 font-medium text-lg text-gray-700 dark:text-gray-400">
                Sales Count:
                <span className="ml-2">500</span>
              </p>

           
            </div>
            <div className="flex">
              <p className=" flex-1 break-all mb-3 gap-2 font-medium text-lg text-gray-700 dark:text-gray-400">
                In order:
                <span className="ml-2">20</span>
              </p>

           
            </div>
            <div className="flex">
              <p className=" flex-1 break-all mb-3 gap-2 font-medium text-lg text-gray-700 dark:text-gray-400">
                Reviews:
                <span className="ml-2">2</span>
              </p>

           
            </div>
            <div className="flex">
              <p className=" flex-1 break-all mb-3 gap-2 font-medium text-lg text-gray-700 dark:text-gray-400">
              Last Updated:
                <span className="ml-2">2022-4-20</span>
              </p>

           
            </div>
          </div>

         

          {/* total purchase */}

          <div className="flex mt-3 mb-1">
            <div className="flex w-full  justify-between">
              <div className="flex flex-1 flex-col">
                <p className=" flex-1 text-xl  gap-2 font-bold text-black  dark:text-white">
                  Total Sales
                </p>
               
              </div>

              <p className="   mb-3  font-lg font-bold text-green-600 dark:text-green-400">
                Nrs.{2000000}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* product description */}
      <div className=" mt-1 p-4 w-full   bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Product details of Samsung F22
        </h5>
        <div className="flex flex-col md:flex-row ">
          {/* left part */}
          <div className="w-full md:w-1/2">
            <ul className="list-disc list-outside pl-8">
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>{" "}
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
            </ul>
          </div>

          {/* rignt part */}
          <div className="w-full md:w-1/2">
            <ul className="list-disc list-outside pl-8">
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>{" "}
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* rating */}
      <div className=" p-6 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center mb-3">
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fourth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-gray-300 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <p className="ml-2 text-sm sm:text-xl font-medium text-gray-900 dark:text-white">
            4.95 out of 5
          </p>
        </div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          1,745 global ratings
        </p>
        <div className="flex items-center mt-4">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            5 star
          </span>
          <div className="mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-400 rounded"
              style={{ width: "70%" }}
            />
          </div>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            70%
          </span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            4 star
          </span>
          <div className="mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-400 rounded"
              style={{ width: "17%" }}
            />
          </div>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            17%
          </span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            3 star
          </span>
          <div className="mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-400 rounded"
              style={{ width: "8%" }}
            />
          </div>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            8%
          </span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            2 star
          </span>
          <div className="mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-400 rounded"
              style={{ width: "4%" }}
            />
          </div>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            4%
          </span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            1 star
          </span>
          <div className="mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-400 rounded"
              style={{ width: "1%" }}
            />
          </div>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
            1%
          </span>
        </div>
      </div>

      {/* reviews */}
      <div className=" mt-1  w-full   bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Product Reviews
        </h5>

        <Review />
        <Review />
        <Review />
        <Review />
        <div className="flex justify-center">
          <button
            type="button"
            className="p-4 text-lg text-blue-700 font-semibold hover:text-blue-800"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductAdminDetails;
