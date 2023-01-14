import { Link } from "react-router-dom";
const  categoryList= [
  'Electronics',
  'Cameras',
  'Laptops',
  'Accessories',
  'Headphones',
  'Food',
  "Books",
  'Clothes/Shoes',
  'Beauty/Health',
  'Sports',
  'Outdoor',
  'Home'
]

function ProductsTable() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {/* table component */}
      <div className="container mx-auto px-4 sm:px-8 dark:bg-gray-700 dark:border-gray-700">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight dark:text-white">
              Products
            </h2>
          </div>
          <div className="my-2 flex sm:flex-row flex-col ">
            <div className="flex flex-row mb-1 sm:mb-0">
              <div className="relative">
                <select className=" h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                </select>
              </div>
              <div className="relative  ">
                <select className=" h-full overflow-y-auto rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-  dark:bg-gray-800 dark:border-gray-700  dark:text-white">
                 
                  <option>All</option>
                 
                  {
                    categoryList.map((category,index)=>{
                      return  <option key={index}>{category}</option>
                    })
                  }
                </select>
              </div>
            </div>
            <div className="block relative">
              <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current text-gray-500"
                >
                  <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                </svg>
              </span>
              <input
                placeholder="Search"
                className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none  dark:bg-gray-800 dark:border-gray-700  dark:text-white"
              />
            </div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:bg-gray-800 dark:border-gray-100 dark:text-white ">
                      Product
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider  dark:bg-gray-800 dark:border-gray-100 dark:text-white">
                    Category
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider  dark:bg-gray-800 dark:border-gray-100 dark:text-white">
                    Stock
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider  dark:bg-gray-800 dark:border-gray-100 dark:text-white">
                      Created at
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider  dark:bg-gray-800 dark:border-gray-100 dark:text-white">
                      Price<span className="normal-case">(NRs)</span>
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider  dark:bg-gray-800 dark:border-gray-100 dark:text-white">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                 
                 
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full "
                            src="data:image/jpeg;base64,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"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className=" font-medium text-gray-900 whitespace-no-wrap  dark:text-white">
                            Samsung F22
                          </p>
                          <p className="text-gray-700 whitespace-no-wrap  dark:text-white">
                            Samsung
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Mobile
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        100
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        20000
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <Link to={`/Dashboard/Product/123`} className="font-medium mx-2 whitespace-no-wrap  text-blue-700 hover:underline dark:text-blue-500">
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full "
                            src="data:image/jpeg;base64,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"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className=" font-medium text-gray-900 whitespace-no-wrap  dark:text-white">
                            Samsung F22
                          </p>
                          <p className="text-gray-700 whitespace-no-wrap  dark:text-white">
                            Samsung
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Mobile
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        100
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        20000
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <Link to={`/Dashboard/Product/123`} className="font-medium mx-2 whitespace-no-wrap  text-blue-700 hover:underline dark:text-blue-500">
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full "
                            src="data:image/jpeg;base64,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"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className=" font-medium text-gray-900 whitespace-no-wrap  dark:text-white">
                            Samsung F22
                          </p>
                          <p className="text-gray-700 whitespace-no-wrap  dark:text-white">
                            Samsung
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Mobile
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        100
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        20000
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <Link to={`/Dashboard/Product/123`} className="font-medium mx-2 whitespace-no-wrap  text-blue-700 hover:underline dark:text-blue-500">
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full "
                            src="data:image/jpeg;base64,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"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className=" font-medium text-gray-900 whitespace-no-wrap  dark:text-white">
                            Samsung F22
                          </p>
                          <p className="text-gray-700 whitespace-no-wrap  dark:text-white">
                            Samsung
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Mobile
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        100
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700 ">
                      <p className="text-gray-900 whitespace-no-wrap dark:text-white">
                        20000
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm  dark:bg-gray-800 dark:border-gray-700">
                      <Link to={`/Dashboard/Product/123`} className="font-medium mx-2 whitespace-no-wrap  text-blue-700 hover:underline dark:text-blue-500">
                        Edit
                      </Link>
                    </td>
                  </tr>

                 
                 
                  {/* <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt="" />
                      </div>
                      <div className="ml-3">
                        <p className= " font-medium text-gray-900 whitespace-no-wrap">
                          Vera Carpenter
                        </p>
                        <p className="text-gray-700 whitespace-no-wrap">
                          vera@gmail.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Jan 21, 2020
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                      <span className="relative">Activo</span>
                    </span>
                  </td>
                </tr>
                
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt="" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Blake Bowman
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Jan 01, 2020
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                      <span className="relative">Activo</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt="" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Dana Moore
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Jan 10, 2020
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                      <span aria-hidden className="absolute inset-0 bg-orange-200 opacity-50 rounded-full" />
                      <span className="relative">Suspended</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80" alt="" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Alonzo Cox
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                      <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full" />
                      <span className="relative">Inactive</span>
                    </span>
                  </td>
                </tr> */}
                </tbody>
              </table>
              <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between  dark:bg-gray-800 dark:border-gray-700      ">
                <span className="text-xs xs:text-sm text-gray-900 dark:text-white">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l dark">
                    Prev
                  </button>
                  <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsTable;
